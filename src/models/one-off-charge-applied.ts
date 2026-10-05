import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionHistoryItemSchema, type SubscriptionHistoryItem } from "./subscription-history-item.js";
import {
  subscriptionHistoryOneOffChargeAppliedEffectiveFromSchema,
  type SubscriptionHistoryOneOffChargeAppliedEffectiveFrom,
} from "./subscription-history-one-off-charge-applied-effective-from.js";
import {
  subscriptionOnPaymentFailureSchema,
  type SubscriptionOnPaymentFailure,
} from "./subscription-on-payment-failure.js";

/** Details specific to `subscription_one_off_charge_applied` actions. */
export type OneOffChargeApplied = {
  /** What happened on the subscription. @default "subscription_one_off_charge_applied" */
  action?: "subscription_one_off_charge_applied";
  /** When the customer was billed for the one-off charge. */
  effectiveFrom: SubscriptionHistoryOneOffChargeAppliedEffectiveFrom;
  /** Items that were charged as part of the one-off charge. */
  items: SubscriptionHistoryItem[];
  /** How Paddle handled payment failure for the one-off charge. */
  onPaymentFailure: SubscriptionOnPaymentFailure;
  /**
   * Paddle ID of the transaction created for the one-off charge, prefixed with `txn_`. `null` if no
   * transaction was created.
   */
  transactionId: string | null;
};

export const oneOffChargeAppliedSchema: Schema<OneOffChargeApplied> = s.object<OneOffChargeApplied>({
  action: s.defaulted(
    s.literal("subscription_one_off_charge_applied"),
    "subscription_one_off_charge_applied",
  ),
  effectiveFrom: subscriptionHistoryOneOffChargeAppliedEffectiveFromSchema,
  items: s.array(s.lazy(() => subscriptionHistoryItemSchema)),
  onPaymentFailure: subscriptionOnPaymentFailureSchema,
  transactionId: s.nullable(s.string()),
  _keysMap: {
    effectiveFrom: "effective_from",
    onPaymentFailure: "on_payment_failure",
    transactionId: "transaction_id",
  },
});
