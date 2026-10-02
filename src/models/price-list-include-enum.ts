import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PriceListIncludeEnum = {
  /** "product": { "description": "Include an object with the product related to this price." } */
  Product: "product",
} as const;
export type PriceListIncludeEnum =
  | (typeof PriceListIncludeEnum)[keyof typeof PriceListIncludeEnum]
  | (string & {});

export const priceListIncludeEnumSchema: EnumSchema<PriceListIncludeEnum> =
  s.enumOf<PriceListIncludeEnum>(PriceListIncludeEnum);
