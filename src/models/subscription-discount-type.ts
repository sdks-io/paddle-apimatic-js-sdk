import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this discount applies for multiple billing periods. */
export const SubscriptionDiscountType = {
  /** "recurring": { "description": "Discount applies to multiple billing periods." } */
  Recurring: "recurring",
  /**
   * "one-off": { "description": "Discount applies to a single billing period only. Returned when a
   * subscription is created in trial with a discount. The discount is removed from the subscription
   * on renewal." }
   */
  OneOff: "one-off",
} as const;
export type SubscriptionDiscountType =
  | (typeof SubscriptionDiscountType)[keyof typeof SubscriptionDiscountType]
  | (string & {});

export const subscriptionDiscountTypeSchema: EnumSchema<SubscriptionDiscountType> =
  s.enumOf<SubscriptionDiscountType>(SubscriptionDiscountType);
