import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceQuantity = {
  /**
   * Minimum quantity of the product related to this price that can be bought. Required if `maximum`
   * set.
   */
  minimum: number;
  /**
   * Maximum quantity of the product related to this price that can be bought. Required if `minimum`
   * set. Must be greater than or equal to the `minimum` value.
   */
  maximum: number;
};

export const priceQuantitySchema: Schema<PriceQuantity> = s.object<PriceQuantity>({
  minimum: s.int(),
  maximum: s.int(),
});
