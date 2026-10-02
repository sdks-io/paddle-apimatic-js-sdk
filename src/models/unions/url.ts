import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle Checkout URL for this transaction, composed of the URL passed in the request or your
 * default payment URL + `?_ptxn=` and the Paddle ID for this transaction.
 */
export type Url = string;

export const urlSchema: Schema<Url> = s.of<Url>(s.union([s.string()]));
