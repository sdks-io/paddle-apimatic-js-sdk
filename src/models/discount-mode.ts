import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Discount mode. Standard discounts are considered part of your catalog and are shown in the Paddle
 * dashboard.
 */
export const DiscountMode = {
  /**
   * "custom": { "description": "Non-catalog discount. Can be created via the API, or by Paddle for
   * checkout recovery discounts. Not returned when listing or shown in the Paddle dashboard." }
   */
  Standard: "standard",
  /**
   * "standard": { "description": "Standard discount. Can be considered part of your catalog and
   * reused across transactions and subscriptions easily." }
   */
  Custom: "custom",
} as const;
export type DiscountMode = (typeof DiscountMode)[keyof typeof DiscountMode] | (string & {});

export const discountModeSchema: EnumSchema<DiscountMode> = s.enumOf<DiscountMode>(DiscountMode);
