import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When the subscription pause took effect. */
export const SubscriptionHistoryPausedEffectiveFrom = {
  /** "immediately": { "description": "The subscription was paused immediately." } */
  Immediately: "immediately",
  /**
   * "next_billing_period": { "description": "The subscription was scheduled to pause at the next
   * billing period." }
   */
  NextBillingPeriod: "next_billing_period",
} as const;
export type SubscriptionHistoryPausedEffectiveFrom =
  | (typeof SubscriptionHistoryPausedEffectiveFrom)[keyof typeof SubscriptionHistoryPausedEffectiveFrom]
  | (string & {});

export const subscriptionHistoryPausedEffectiveFromSchema: EnumSchema<SubscriptionHistoryPausedEffectiveFrom> =
  s.enumOf<SubscriptionHistoryPausedEffectiveFrom>(SubscriptionHistoryPausedEffectiveFrom);
