import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicTransactionOrigin = {
  /** "api": { "description": "Transaction created via the Paddle API." } */
  Api: "api",
  /**
   * "subscription_charge": { "description": "Transaction created automatically by Paddle as a
   * result of a one-time charge for a subscription." }
   */
  SubscriptionCharge: "subscription_charge",
  /**
   * "subscription_payment_method_change": { "description": "Transaction created automatically as
   * part of updating a payment method. May be a zero value transaction." }
   */
  SubscriptionPaymentMethodChange: "subscription_payment_method_change",
  /**
   * "subscription_recurring": { "description": "Transaction created automatically by Paddle as a
   * result of a subscription renewal." }
   */
  SubscriptionRecurring: "subscription_recurring",
  /**
   * "subscription_update": { "description": "Transaction created automatically by Paddle as a
   * result of an update to a subscription." }
   */
  SubscriptionUpdate: "subscription_update",
  /** "web": { "description": "Transaction created automatically by Paddle.js for a checkout." } */
  Web: "web",
} as const;
export type PublicTransactionOrigin =
  | (typeof PublicTransactionOrigin)[keyof typeof PublicTransactionOrigin]
  | (string & {});

export const publicTransactionOriginSchema: EnumSchema<PublicTransactionOrigin> =
  s.enumOf<PublicTransactionOrigin>(PublicTransactionOrigin);
