import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the customer that this preview is for, prefixed with `ctm_`. */
export type CustomerId1 = string;

export const customerId1Schema: Schema<CustomerId1> = s.of<CustomerId1>(s.union([s.string()]));
