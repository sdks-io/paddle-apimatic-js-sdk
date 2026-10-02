import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID for the price related to this transaction line item, prefixed with `pri_`. The value is
 * null for custom prices being previewed.
 */
export type PriceId = string;

export const priceIdSchema: Schema<PriceId> = s.of<PriceId>(s.union([s.string()]));
