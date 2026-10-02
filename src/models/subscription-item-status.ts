import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this subscription item. Set automatically by Paddle. */
export const SubscriptionItemStatus = {
  /**
   * "active": { "description": "This item is active. It is not in trial and Paddle bills for it." }
   */
  Active: "active",
  /**
   * "inactive": { "description": "This item is not active. Set when the related subscription is
   * paused." }
   */
  Inactive: "inactive",
  /** "trialing": { "description": "This item is in trial. Paddle has not billed for it." } */
  Trialing: "trialing",
} as const;
export type SubscriptionItemStatus =
  | (typeof SubscriptionItemStatus)[keyof typeof SubscriptionItemStatus]
  | (string & {});

export const subscriptionItemStatusSchema: EnumSchema<SubscriptionItemStatus> =
  s.enumOf<SubscriptionItemStatus>(SubscriptionItemStatus);
