import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prorationBillingModeSchema, type ProrationBillingMode } from "./proration-billing-mode.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** Details specific to `subscription_billing_date_updated` actions. */
export type BillingDateUpdated = {
  /** What happened on the subscription. @default "subscription_billing_date_updated" */
  action?: "subscription_billing_date_updated";
  /**
   * RFC 3339 datetime string of the updated billing date. `null` when the subscription has no
   * upcoming billing date, for example when a scheduled pause or cancellation means it will not be
   * billed again.
   */
  nextBilledAt?: Date | null;
  /** Billing period of the subscription after the billing date was updated. */
  currentBillingPeriod: TimePeriod;
  /**
   * Paddle ID of the transaction created as a result of the billing date change, prefixed with
   * `txn_`. `null` if no transaction was created.
   */
  transactionId?: string | null;
  /** How proration was calculated for this billing date change. */
  prorationBillingMode: ProrationBillingMode;
};

export const billingDateUpdatedSchema: Schema<BillingDateUpdated> = s.object<BillingDateUpdated>({
  action: s.defaulted(s.literal("subscription_billing_date_updated"), "subscription_billing_date_updated"),
  nextBilledAt: s.optionalNullable(s.dateTime()),
  currentBillingPeriod: timePeriodSchema,
  transactionId: s.optionalNullable(s.string()),
  prorationBillingMode: prorationBillingModeSchema,
  _keysMap: {
    nextBilledAt: "next_billed_at",
    currentBillingPeriod: "current_billing_period",
    transactionId: "transaction_id",
    prorationBillingMode: "proration_billing_mode",
  },
});
