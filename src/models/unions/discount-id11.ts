import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the discount applied to this transaction preview, prefixed with `dsc_`. */
export type DiscountId11 = string;

export const discountId11Schema: Schema<DiscountId11> = s.of<DiscountId11>(s.union([s.string()]));
