import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PriceIncludeEnum = {
  /** "product": { "description": "Include an object with the product related to this price." } */
  Product: "product",
} as const;
export type PriceIncludeEnum = (typeof PriceIncludeEnum)[keyof typeof PriceIncludeEnum] | (string & {});

export const priceIncludeEnumSchema: EnumSchema<PriceIncludeEnum> =
  s.enumOf<PriceIncludeEnum>(PriceIncludeEnum);
