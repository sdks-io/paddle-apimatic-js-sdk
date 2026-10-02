import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of discount. */
export const SubscriptionHistoryDiscountType = {
  /** "recurring": { "description": "Discount applies to multiple billing periods." } */
  Recurring: "recurring",
  /** "one-off": { "description": "Discount applies to a single billing period." } */
  OneOff: "one-off",
} as const;
export type SubscriptionHistoryDiscountType =
  | (typeof SubscriptionHistoryDiscountType)[keyof typeof SubscriptionHistoryDiscountType]
  | (string & {});

export const subscriptionHistoryDiscountTypeSchema: EnumSchema<SubscriptionHistoryDiscountType> =
  s.enumOf<SubscriptionHistoryDiscountType>(SubscriptionHistoryDiscountType);
