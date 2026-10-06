import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemUpdateSummarySchema, type ItemUpdateSummary } from "./item-update-summary.js";
import { priceSchema, type Price } from "./price.js";
import { prorationBillingModeSchema, type ProrationBillingMode } from "./proration-billing-mode.js";
import {
  subscriptionOnPaymentFailureSchema,
  type SubscriptionOnPaymentFailure,
} from "./subscription-on-payment-failure.js";

/** Details specific to `subscription_item_added` actions. */
export type ItemAdded = {
  /** What happened on the subscription. @default "subscription_item_added" */
  action?: "subscription_item_added";
  /** Price of the item that was added to the subscription. */
  price: Price;
  /** Quantity of the item on the subscription after being added. */
  quantity: number;
  /**
   * Summary of the quantity change. For a new item, `quantity_delta` matches the resulting
   * `quantity` since the previous quantity was zero.
   */
  updateSummary: ItemUpdateSummary;
  /** How Paddle calculated proration for the item added. */
  prorationBillingMode: ProrationBillingMode;
  /** How Paddle handled payment failure for the operation. */
  onPaymentFailure: SubscriptionOnPaymentFailure;
  /**
   * Paddle ID of the transaction created as a result of the item being added, prefixed with `txn_`.
   * `null` if no transaction was created.
   */
  transactionId?: string | null;
};

export const itemAddedSchema: Schema<ItemAdded> = s.object<ItemAdded>({
  action: s.defaulted(s.literal("subscription_item_added"), "subscription_item_added"),
  price: priceSchema,
  quantity: s.int(),
  updateSummary: itemUpdateSummarySchema,
  prorationBillingMode: prorationBillingModeSchema,
  onPaymentFailure: subscriptionOnPaymentFailureSchema,
  transactionId: s.optionalNullable(s.string()),
  _keysMap: {
    updateSummary: "update_summary",
    prorationBillingMode: "proration_billing_mode",
    onPaymentFailure: "on_payment_failure",
    transactionId: "transaction_id",
  },
});
