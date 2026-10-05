import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemUpdateSummarySchema, type ItemUpdateSummary } from "./item-update-summary.js";
import { priceSchema, type Price } from "./price.js";
import { prorationBillingModeSchema, type ProrationBillingMode } from "./proration-billing-mode.js";
import {
  subscriptionOnPaymentFailureSchema,
  type SubscriptionOnPaymentFailure,
} from "./subscription-on-payment-failure.js";

/** Details specific to `subscription_item_removed` actions. */
export type ItemRemoved = {
  /** What happened on the subscription. @default "subscription_item_removed" */
  action?: "subscription_item_removed";
  /** Price of the item that was removed from the subscription. */
  price: Price;
  /**
   * Quantity of the item on the subscription after the removal. Always `0` since the item no longer
   * exists on the subscription.
   */
  quantity: number;
  /**
   * Summary of the quantity change. `quantity_delta` is negative, reflecting the amount removed.
   */
  updateSummary: ItemUpdateSummary;
  /** How Paddle calculated proration for the item removal. */
  prorationBillingMode: ProrationBillingMode;
  /** How Paddle handled payment failure for the operation. */
  onPaymentFailure: SubscriptionOnPaymentFailure;
  /**
   * Paddle ID of the transaction created as a result of the item being removed, prefixed with
   * `txn_`. `null` if no transaction was created.
   */
  transactionId: string | null;
};

export const itemRemovedSchema: Schema<ItemRemoved> = s.object<ItemRemoved>({
  action: s.defaulted(s.literal("subscription_item_removed"), "subscription_item_removed"),
  price: priceSchema,
  quantity: s.int(),
  updateSummary: itemUpdateSummarySchema,
  prorationBillingMode: prorationBillingModeSchema,
  onPaymentFailure: subscriptionOnPaymentFailureSchema,
  transactionId: s.nullable(s.string()),
  _keysMap: {
    updateSummary: "update_summary",
    prorationBillingMode: "proration_billing_mode",
    onPaymentFailure: "on_payment_failure",
    transactionId: "transaction_id",
  },
});
