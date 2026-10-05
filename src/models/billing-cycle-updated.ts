import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./duration.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** Details specific to `subscription_billing_cycle_updated` actions. */
export type BillingCycleUpdated = {
  /** What happened on the subscription. @default "subscription_billing_cycle_updated" */
  action?: "subscription_billing_cycle_updated";
  /** Updated billing cycle of the subscription. This is what the billing cycle was changed to. */
  billingCycle: Duration;
  /** Billing period of the subscription after the billing cycle was updated. */
  currentBillingPeriod: TimePeriod;
  /**
   * RFC 3339 datetime string of when the subscription was next scheduled to be billed after the
   * billing cycle was updated. `null` if the subscription has no next billing date (for example,
   * paused without a scheduled resume).
   */
  nextBilledAt: Date | null;
};

export const billingCycleUpdatedSchema: Schema<BillingCycleUpdated> = s.object<BillingCycleUpdated>({
  action: s.defaulted(s.literal("subscription_billing_cycle_updated"), "subscription_billing_cycle_updated"),
  billingCycle: durationSchema,
  currentBillingPeriod: timePeriodSchema,
  nextBilledAt: s.nullable(s.dateTime()),
  _keysMap: {
    billingCycle: "billing_cycle",
    currentBillingPeriod: "current_billing_period",
    nextBilledAt: "next_billed_at",
  },
});
