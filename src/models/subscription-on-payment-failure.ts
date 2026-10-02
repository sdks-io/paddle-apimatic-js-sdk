import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How Paddle should handle changes made to a subscription or its items if the payment fails during
 * update. If omitted, defaults to `prevent_change`.
 */
export const SubscriptionOnPaymentFailure = {
  /**
   * "prevent_change": { "description": "In case of payment failure, prevent the change to the
   * subscription from applying." }
   */
  PreventChange: "prevent_change",
  /**
   * "apply_change": { "description": "In case of payment failure, apply the change and update the
   * subscription." }
   */
  ApplyChange: "apply_change",
} as const;
export type SubscriptionOnPaymentFailure =
  | (typeof SubscriptionOnPaymentFailure)[keyof typeof SubscriptionOnPaymentFailure]
  | (string & {});

export const subscriptionOnPaymentFailureSchema: EnumSchema<SubscriptionOnPaymentFailure> =
  s.enumOf<SubscriptionOnPaymentFailure>(SubscriptionOnPaymentFailure);
