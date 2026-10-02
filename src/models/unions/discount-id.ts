import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the discount applied to this transaction, prefixed with `dsc_`. */
export type DiscountId = string;

export const discountIdSchema: Schema<DiscountId> = s.of<DiscountId>(s.union([s.string()]));
