import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of this subscription. Set automatically by Paddle. Use the pause subscription or cancel
 * subscription operations to change.
 */
export const SubscriptionStatus = {
  /**
   * "active": { "description": "Subscription is active. Paddle is billing for this subscription and
   * related transactions aren't past due." }
   */
  Active: "active",
  /**
   * "canceled": { "description": "Subscription is canceled. Automatically set by Paddle when a
   * subscription is canceled. When a subscription is set to cancel on the next billing period, a
   * scheduled change for the cancellation is created. The subscription status moves to canceled
   * when the scheduled change takes effect." }
   */
  Canceled: "canceled",
  /**
   * "past_due": { "description": "Subscription has an overdue payment. Automatically set by Paddle
   * when payment fails for an automatically-collected transaction, or when payment terms have
   * elapsed for a manually-collected transaction (an invoice)." }
   */
  PastDue: "past_due",
  /**
   * "paused": { "description": "Subscription is paused. Automatically set by Paddle when a
   * subscription is paused. When a subscription is set to pause on the next billing period, a
   * scheduled change for the pause is created. The subscription status moves to `paused` when the
   * scheduled change takes effect." }
   */
  Paused: "paused",
  /** "trialing": { "description": "Subscription is in trial." } */
  Trialing: "trialing",
} as const;
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus] | (string & {});

export const subscriptionStatusSchema: EnumSchema<SubscriptionStatus> =
  s.enumOf<SubscriptionStatus>(SubscriptionStatus);
