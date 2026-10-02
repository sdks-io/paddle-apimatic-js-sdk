import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/** Details specific to `subscription_renewed` actions. */
export type Renewed = {
  /** What happened on the subscription. @default "subscription_renewed" */
  action?: "subscription_renewed";
  /**
   * RFC 3339 datetime string of when the subscription was next scheduled to be billed after this
   * renewal.
   */
  nextBilledAt: Date;
  /** Billing period of the subscription after renewal. */
  currentBillingPeriod: TimePeriod;
  /** Paddle ID of the transaction created for this renewal, prefixed with `txn_`. */
  transactionId: string;
};

export const renewedSchema: Schema<Renewed> = s.object<Renewed>({
  action: s.defaulted(s.literal("subscription_renewed"), "subscription_renewed"),
  nextBilledAt: s.dateTime(),
  currentBillingPeriod: timePeriodSchema,
  transactionId: s.string(),
  _keysMap: {
    nextBilledAt: "next_billed_at",
    currentBillingPeriod: "current_billing_period",
    transactionId: "transaction_id",
  },
});
