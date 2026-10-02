import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique code that customers can use to redeem this discount at checkout. Not case-sensitive. */
export type Code1 = string;

export const code1Schema: Schema<Code1> = s.of<Code1>(s.union([s.string()]));
