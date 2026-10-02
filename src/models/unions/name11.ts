import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Name of this price, shown to customers at checkout and on invoices. Typically describes how often
 * the related product bills.
 */
export type Name11 = string;

export const name11Schema: Schema<Name11> = s.of<Name11>(s.union([s.string()]));
