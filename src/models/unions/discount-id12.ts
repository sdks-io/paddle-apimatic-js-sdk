import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the discount to apply to this transaction preview, prefixed with `dsc_`. */
export type DiscountId12 = string;

export const discountId12Schema: Schema<DiscountId12> = s.of<DiscountId12>(s.union([s.string()]));
