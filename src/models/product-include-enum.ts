import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductIncludeEnum = {
  /** "prices": { "description": "Include an array of prices related to this product." } */
  Prices: "prices",
} as const;
export type ProductIncludeEnum = (typeof ProductIncludeEnum)[keyof typeof ProductIncludeEnum] | (string & {});

export const productIncludeEnumSchema: EnumSchema<ProductIncludeEnum> =
  s.enumOf<ProductIncludeEnum>(ProductIncludeEnum);
