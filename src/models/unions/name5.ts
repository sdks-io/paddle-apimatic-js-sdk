import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Name of this price, shown to customers at checkout and on invoices. Typically describes how often
 * the related product bills.
 */
export type Name5 = string;

export const name5Schema: Schema<Name5> = s.of<Name5>(s.union([s.string()]));
