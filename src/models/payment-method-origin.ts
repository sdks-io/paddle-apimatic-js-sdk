import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes how this payment method was saved. */
export const PaymentMethodOrigin = {
  /**
   * "saved_during_purchase": { "description": "The customer chose to save this payment method while
   * purchasing a one-time item." }
   */
  SavedDuringPurchase: "saved_during_purchase",
  /**
   * "subscription": { "description": "The customer purchased a subscription, so this payment method
   * was saved for future purchases." }
   */
  Subscription: "subscription",
  /**
   * "subscription_saved_during_purchase": { "description": "The customer chose to save the payment
   * method when purchasing a subscription." }
   */
  SubscriptionSavedDuringPurchase: "subscription_saved_during_purchase",
} as const;
export type PaymentMethodOrigin =
  | (typeof PaymentMethodOrigin)[keyof typeof PaymentMethodOrigin]
  | (string & {});

export const paymentMethodOriginSchema: EnumSchema<PaymentMethodOrigin> =
  s.enumOf<PaymentMethodOrigin>(PaymentMethodOrigin);
