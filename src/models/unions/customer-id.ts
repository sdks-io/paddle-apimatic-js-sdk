import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the customer that this transaction is for, prefixed with `ctm_`. */
export type CustomerId = string;

export const customerIdSchema: Schema<CustomerId> = s.of<CustomerId>(s.union([s.string()]));
