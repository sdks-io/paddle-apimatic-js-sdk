import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of an existing discount to apply to the simulated subscription. */
export type DiscountId4 = string;

export const discountId4Schema: Schema<DiscountId4> = s.of<DiscountId4>(s.union([s.string()]));
