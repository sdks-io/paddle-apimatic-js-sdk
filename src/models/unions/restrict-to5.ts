import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Product or price IDs that this discount is for. When including a product ID, all prices for that
 * product can be discounted. `null` if this discount applies to all products and prices.
 */
export type RestrictTo5 = string[];

export const restrictTo5Schema: Schema<RestrictTo5> = s.of<RestrictTo5>(s.union([s.array(s.string())]));
