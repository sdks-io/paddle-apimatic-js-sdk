import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation that triggered the failed payment attempt. */
export const SubscriptionHistoryPaymentAttemptedOperation = {
  /**
   * "subscription_update": { "description": "An update to the subscription — for example, an item
   * add, remove, quantity change, or billing date move." }
   */
  SubscriptionUpdate: "subscription_update",
  /**
   * "subscription_one_off_charge": { "description": "A one-off charge applied to the subscription."
   * }
   */
  SubscriptionOneOffCharge: "subscription_one_off_charge",
  /** "subscription_activate": { "description": "An activation of a trialing subscription." } */
  SubscriptionActivate: "subscription_activate",
} as const;
export type SubscriptionHistoryPaymentAttemptedOperation =
  | (typeof SubscriptionHistoryPaymentAttemptedOperation)[keyof typeof SubscriptionHistoryPaymentAttemptedOperation]
  | (string & {});

export const subscriptionHistoryPaymentAttemptedOperationSchema: EnumSchema<SubscriptionHistoryPaymentAttemptedOperation> =
  s.enumOf<SubscriptionHistoryPaymentAttemptedOperation>(SubscriptionHistoryPaymentAttemptedOperation);
