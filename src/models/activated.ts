import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** Details specific to `subscription_activated` actions. */
export type Activated = {
  /** What happened on the subscription. @default "subscription_activated" */
  action?: "subscription_activated";
  /** Status of the subscription after activation. */
  status: SubscriptionStatus;
  /**
   * RFC 3339 datetime string of when the subscription was first billed. `null` when the
   * subscription has never been billed — for example, an imported subscription recovering from
   * `past_due`.
   */
  firstBilledAt?: Date | null;
  /**
   * RFC 3339 datetime string of when the subscription was next scheduled to be billed at the time
   * of activation. `null` when the subscription has no next billing date — for example, a recovered
   * `past_due` subscription that is scheduled to cancel or pause.
   */
  nextBilledAt?: Date | null;
  /** Billing period of the subscription at the time of activation. */
  currentBillingPeriod: TimePeriod;
  /** Paddle ID of the transaction that activated the subscription, prefixed with `txn_`. */
  transactionId: string;
};

export const activatedSchema: Schema<Activated> = s.object<Activated>({
  action: s.defaulted(s.literal("subscription_activated"), "subscription_activated"),
  status: subscriptionStatusSchema,
  firstBilledAt: s.optionalNullable(s.dateTime()),
  nextBilledAt: s.optionalNullable(s.dateTime()),
  currentBillingPeriod: timePeriodSchema,
  transactionId: s.string(),
  _keysMap: {
    firstBilledAt: "first_billed_at",
    nextBilledAt: "next_billed_at",
    currentBillingPeriod: "current_billing_period",
    transactionId: "transaction_id",
  },
});
