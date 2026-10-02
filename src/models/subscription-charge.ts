import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectiveFromSchema, type EffectiveFrom } from "./effective-from.js";
import {
  SubscriptionOnPaymentFailure,
  subscriptionOnPaymentFailureSchema,
} from "./subscription-on-payment-failure.js";
import {
  subscriptionChargeItemsSchema,
  type SubscriptionChargeItems,
} from "./unions/subscription-charge-items.js";

/** Represents a one-time charge for a subscription. */
export type SubscriptionCharge = {
  /** When one-time charges should be billed. */
  effectiveFrom: EffectiveFrom;
  /**
   * List of one-time charges to bill for. Only prices where the `billing_cycle` is `null` may be
   * added.
   *
   * You can charge for items that you've added to your catalog by passing the Paddle ID of an
   * existing price entity, or you can charge for non-catalog items by passing a price object.
   *
   * Non-catalog items can be for existing products, or you can pass a product object as part of
   * your price to charge for a non-catalog product.
   */
  items: SubscriptionChargeItems[];
  /** @default SubscriptionOnPaymentFailure.PreventChange */
  onPaymentFailure?: SubscriptionOnPaymentFailure;
};

export const subscriptionChargeSchema: Schema<SubscriptionCharge> = s.object<SubscriptionCharge>({
  effectiveFrom: effectiveFromSchema,
  items: s.array(s.lazy(() => subscriptionChargeItemsSchema)),
  onPaymentFailure: s.defaulted(
    subscriptionOnPaymentFailureSchema,
    SubscriptionOnPaymentFailure.PreventChange,
  ),
  _keysMap: {
    effectiveFrom: "effective_from",
    onPaymentFailure: "on_payment_failure",
  },
});
