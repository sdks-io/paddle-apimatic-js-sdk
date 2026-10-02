import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Revised second line of the address for this transaction. */
export type SecondLine3 = string;

export const secondLine3Schema: Schema<SecondLine3> = s.of<SecondLine3>(s.union([s.string()]));
