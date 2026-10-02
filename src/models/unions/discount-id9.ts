import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the discount to apply to this transaction, prefixed with `dsc_`. */
export type DiscountId9 = string;

export const discountId9Schema: Schema<DiscountId9> = s.of<DiscountId9>(s.union([s.string()]));
