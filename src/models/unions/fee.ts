import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Total fee taken by Paddle for this transaction. `null` until the transaction is `completed` and
 * the fee is processed.
 */
export type Fee = string;

export const feeSchema: Schema<Fee> = s.of<Fee>(s.union([s.string()]));
