import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { discountSchema, type Discount } from "./discount.js";

/** Array of discounts applied to this preview line item. Empty if no discounts applied. */
export type PricePreviewDiscounts = {
  /** Related discount entity for this preview line item. */
  discount: Discount;
  /** Total amount discounted as a result of this discount. */
  total: string;
  /** Total amount discounted as a result of this discount in the format of a given currency. ' */
  formattedTotal: string;
};

export const pricePreviewDiscountsSchema: Schema<PricePreviewDiscounts> = s.object<PricePreviewDiscounts>({
  discount: discountSchema,
  total: s.string(),
  formattedTotal: s.string(),
  _keysMap: {
    formattedTotal: "formatted_total",
  },
});
