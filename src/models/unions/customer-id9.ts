import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the customer that this transaction is for, prefixed with `ctm_`. If omitted,
 * transaction status is `draft`.
 */
export type CustomerId9 = string;

export const customerId9Schema: Schema<CustomerId9> = s.of<CustomerId9>(s.union([s.string()]));
