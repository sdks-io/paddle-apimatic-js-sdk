import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the discount applied to this preview, prefixed with `dsc_`. */
export type DiscountId1 = string;

export const discountId1Schema: Schema<DiscountId1> = s.of<DiscountId1>(s.union([s.string()]));
