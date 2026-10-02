import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";

/** Details specific to `subscription_past_due` actions. */
export type PastDue = {
  /** What happened on the subscription. @default "subscription_past_due" */
  action?: "subscription_past_due";
  /** The status of the subscription after becoming past due. */
  status: SubscriptionStatus;
  /** Paddle ID of the failed transaction, prefixed with `txn_`. */
  transactionId: string;
};

export const pastDueSchema: Schema<PastDue> = s.object<PastDue>({
  action: s.defaulted(s.literal("subscription_past_due"), "subscription_past_due"),
  status: subscriptionStatusSchema,
  transactionId: s.string(),
  _keysMap: {
    transactionId: "transaction_id",
  },
});
