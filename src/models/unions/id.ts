import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Unique Paddle ID for this product, prefixed with `pro_`. The value is null for custom products
 * being previewed.
 */
export type Id = string;

export const idSchema: Schema<Id> = s.of<Id>(s.union([s.string()]));
