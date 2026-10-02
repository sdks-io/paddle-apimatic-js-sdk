import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount adjusted for this transaction item. Required when item `type` is `partial`. */
export type Amount = string;

export const amountSchema: Schema<Amount> = s.of<Amount>(s.union([s.string()]));
