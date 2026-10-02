import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryPaymentAttemptedOperationSchema,
  type SubscriptionHistoryPaymentAttemptedOperation,
} from "./subscription-history-payment-attempted-operation.js";

/**
 * Details specific to `subscription_payment_attempted` actions. Recorded when a payment attempt
 * fails for an operation that attempts a payment, like a subscription update or one-time charge.
 * Successful payment outcomes are captured by the relevant action, like `subscription_item_added`,
 * `subscription_one_off_charge_applied`, or `subscription_activated`.
 */
export type PaymentAttempted = {
  /** What happened on the subscription. @default "subscription_payment_attempted" */
  action?: "subscription_payment_attempted";
  /**
   * Operation that resulted in the failed payment attempt. Use the related transaction ID to get
   * the full details of the attempted change.
   */
  operation: SubscriptionHistoryPaymentAttemptedOperation;
  /** Paddle ID of the failed transaction, prefixed with `txn_`. */
  transactionId: string;
};

export const paymentAttemptedSchema: Schema<PaymentAttempted> = s.object<PaymentAttempted>({
  action: s.defaulted(s.literal("subscription_payment_attempted"), "subscription_payment_attempted"),
  operation: subscriptionHistoryPaymentAttemptedOperationSchema,
  transactionId: s.string(),
  _keysMap: {
    transactionId: "transaction_id",
  },
});
