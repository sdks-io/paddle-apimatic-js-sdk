import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionStatusQuery = {
  /**
   * "active": { "description": "Return subscriptions where the status is `active`. Returned
   * subscriptions are active and Paddle is billing for them." }
   */
  Active: "active",
  /**
   * "canceled": { "description": "Return subscriptions where the status is `canceled`. Returned
   * subscriptions are canceled." }
   */
  Canceled: "canceled",
  /**
   * "past_due": { "description": "Return subscriptions where the status is `past_due`. Returned
   * subscriptions have an overdue payment." }
   */
  PastDue: "past_due",
  /**
   * "paused": { "description": "Return subscriptions where the status is `paused`. Returned
   * subscriptions are paused." }
   */
  Paused: "paused",
  /**
   * "trialing": { "description": "Return subscriptions where the status is `trialing`. Returned
   * subscriptions are in trial." }
   */
  Trialing: "trialing",
} as const;
export type SubscriptionStatusQuery =
  | (typeof SubscriptionStatusQuery)[keyof typeof SubscriptionStatusQuery]
  | (string & {});

export const subscriptionStatusQuerySchema: EnumSchema<SubscriptionStatusQuery> =
  s.enumOf<SubscriptionStatusQuery>(SubscriptionStatusQuery);
