import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the customer that this transaction preview is for, prefixed with `ctm_`. */
export type CustomerId11 = string;

export const customerId11Schema: Schema<CustomerId11> = s.of<CustomerId11>(s.union([s.string()]));
