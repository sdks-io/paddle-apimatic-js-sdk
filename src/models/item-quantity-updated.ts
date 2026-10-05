import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemUpdateSummarySchema, type ItemUpdateSummary } from "./item-update-summary.js";
import { priceSchema, type Price } from "./price.js";
import { prorationBillingModeSchema, type ProrationBillingMode } from "./proration-billing-mode.js";
import {
  subscriptionOnPaymentFailureSchema,
  type SubscriptionOnPaymentFailure,
} from "./subscription-on-payment-failure.js";

/** Details specific to `subscription_item_quantity_updated` actions. */
export type ItemQuantityUpdated = {
  /** What happened on the subscription. @default "subscription_item_quantity_updated" */
  action?: "subscription_item_quantity_updated";
  /** Price of the item where the quantity was updated. */
  price: Price;
  /** Total quantity of the item on the subscription after the change. */
  quantity: number;
  /**
   * Summary of the quantity change. `quantity_delta` is positive when the quantity increased,
   * negative when it decreased.
   */
  updateSummary: ItemUpdateSummary;
  /** How Paddle calculated proration for the quantity change. */
  prorationBillingMode: ProrationBillingMode;
  /** How Paddle handled payment failure for the operation. */
  onPaymentFailure: SubscriptionOnPaymentFailure;
  /**
   * Paddle ID of the transaction created as a result of the quantity change, prefixed with `txn_`.
   * `null` if no transaction was created.
   */
  transactionId: string | null;
};

export const itemQuantityUpdatedSchema: Schema<ItemQuantityUpdated> = s.object<ItemQuantityUpdated>({
  action: s.defaulted(s.literal("subscription_item_quantity_updated"), "subscription_item_quantity_updated"),
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
