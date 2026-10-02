import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiscountIncludeEnum = {
  /**
   * "discount_group": { "description": "Include an object for the discount group entity related to
   * this discount." }
   */
  DiscountGroup: "discount_group",
} as const;
export type DiscountIncludeEnum =
  | (typeof DiscountIncludeEnum)[keyof typeof DiscountIncludeEnum]
  | (string & {});

export const discountIncludeEnumSchema: EnumSchema<DiscountIncludeEnum> =
  s.enumOf<DiscountIncludeEnum>(DiscountIncludeEnum);
