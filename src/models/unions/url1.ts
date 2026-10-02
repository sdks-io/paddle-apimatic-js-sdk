import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Checkout URL to use for the payment link for this transaction. Pass the URL for an approved
 * domain, or `null` to set to your default payment URL.
 *
 * Paddle returns a unique payment link composed of the URL passed or your default payment URL +
 * `?_ptxn=` and the Paddle ID for this transaction.
 */
export type Url1 = string;

export const url1Schema: Schema<Url1> = s.of<Url1>(s.union([s.string()]));
