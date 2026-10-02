import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID for the product that this price is for, prefixed with `pro_`. The value is null for
 * custom products being previewed.
 */
export type ProductId = string;

export const productIdSchema: Schema<ProductId> = s.of<ProductId>(s.union([s.string()]));
