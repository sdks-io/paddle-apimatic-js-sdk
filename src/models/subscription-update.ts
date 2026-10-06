import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingDetailsUpdateSchema, type BillingDetailsUpdate } from "./billing-details-update.js";
import { collectionModeSchema, type CollectionMode } from "./collection-mode.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { prorationBillingModeSchema, type ProrationBillingMode } from "./proration-billing-mode.js";
import {
  subscriptionDiscountEffectiveFromSchema,
  type SubscriptionDiscountEffectiveFrom,
} from "./subscription-discount-effective-from.js";
import {
  subscriptionOnPaymentFailureSchema,
  type SubscriptionOnPaymentFailure,
} from "./subscription-on-payment-failure.js";
import {
  subscriptionUpdateItemsSchema,
  type SubscriptionUpdateItems,
} from "./unions/subscription-update-items.js";

/** Represents a subscription entity when updating subscriptions. */
export type SubscriptionUpdate = {
  /**
   * Paddle ID of the customer that this subscription is for, prefixed with `ctm_`. Include to
   * change the customer for a subscription.
   */
  customerId?: string;
  /**
   * Paddle ID of the address that this subscription is for, prefixed with `add_`. Include to change
   * the address for a subscription.
   */
  addressId?: string;
  /**
   * Paddle ID of the business that this subscription is for, prefixed with `biz_`. Include to
   * change the business for a subscription.
   */
  businessId?: string | null;
  /**
   * Supported three-letter ISO 4217 currency code. Include to change the currency that a
   * subscription bills in. When changing `collection_mode` to `manual`, you may need to change
   * currency code to `USD`, `EUR`, or `GBP`.
   */
  currencyCode?: CurrencyCode;
  /**
   * RFC 3339 datetime string of when this subscription is next scheduled to be billed. Include to
   * change the next billing date.
   */
  nextBilledAt?: Date;
  /**
   * Details of the discount applied to this subscription. Include to add a discount to a
   * subscription. `null` to remove a discount.
   */
  discount?: SubscriptionDiscountEffectiveFrom | null;
  /**
   * How payment is collected for transactions created for this subscription. `automatic` for
   * checkout, `manual` for invoices.
   */
  collectionMode?: CollectionMode;
  /**
   * Details for invoicing. Required if `collection_mode` is `manual`. `null` if changing
   * `collection_mode` to `automatic`.
   */
  billingDetails?: BillingDetailsUpdate | null;
  /**
   * Change that's scheduled to be applied to a subscription. When updating, you may only set to
   * `null` to remove a scheduled change. Use the pause subscription, cancel subscription, and
   * resume subscription operations to create scheduled changes.
   */
  scheduledChange?: string | null;
  /**
   * List of items on this subscription. Only recurring items may be added. Send the complete list
   * of items that should be on this subscription, including existing items to retain.
   */
  items?: SubscriptionUpdateItems[];
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /**
   * How Paddle should handle proration calculation for changes made to a subscription or its items.
   * Required when making changes that impact billing.
   *
   * For automatically-collected subscriptions, responses may take longer than usual if a proration
   * billing mode that collects for payment immediately is used.
   */
  prorationBillingMode?: ProrationBillingMode;
  onPaymentFailure?: SubscriptionOnPaymentFailure;
};

export const subscriptionUpdateSchema: Schema<SubscriptionUpdate> = s.object<SubscriptionUpdate>({
  customerId: s.optional(s.string()),
  addressId: s.optional(s.string()),
  businessId: s.optionalNullable(s.string()),
  currencyCode: s.optional(s.lazy(() => currencyCodeSchema)),
  nextBilledAt: s.optional(s.dateTime()),
  discount: s.optionalNullable(s.lazy(() => subscriptionDiscountEffectiveFromSchema)),
  collectionMode: s.optional(s.lazy(() => collectionModeSchema)),
  billingDetails: s.optionalNullable(s.lazy(() => billingDetailsUpdateSchema)),
  scheduledChange: s.optionalNullable(s.string()),
  items: s.optional(s.array(s.lazy(() => subscriptionUpdateItemsSchema))),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  prorationBillingMode: s.optional(s.lazy(() => prorationBillingModeSchema)),
  onPaymentFailure: s.optional(s.lazy(() => subscriptionOnPaymentFailureSchema)),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    businessId: "business_id",
    currencyCode: "currency_code",
    nextBilledAt: "next_billed_at",
    collectionMode: "collection_mode",
    billingDetails: "billing_details",
    scheduledChange: "scheduled_change",
    customData: "custom_data",
    prorationBillingMode: "proration_billing_mode",
    onPaymentFailure: "on_payment_failure",
  },
});
