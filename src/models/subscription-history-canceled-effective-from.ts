import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When the subscription cancellation took effect. */
export const SubscriptionHistoryCanceledEffectiveFrom = {
  /** "immediately": { "description": "The subscription was canceled immediately." } */
  Immediately: "immediately",
  /**
   * "next_billing_period": { "description": "The subscription was scheduled to cancel at the next
   * billing period." }
   */
  NextBillingPeriod: "next_billing_period",
} as const;
export type SubscriptionHistoryCanceledEffectiveFrom =
  | (typeof SubscriptionHistoryCanceledEffectiveFrom)[keyof typeof SubscriptionHistoryCanceledEffectiveFrom]
  | (string & {});

export const subscriptionHistoryCanceledEffectiveFromSchema: EnumSchema<SubscriptionHistoryCanceledEffectiveFrom> =
  s.enumOf<SubscriptionHistoryCanceledEffectiveFrom>(SubscriptionHistoryCanceledEffectiveFrom);
