import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Value to filter by. */
export type Value2 = string[] | string;

export const value2Schema: Schema<Value2> = s.of<Value2>(s.union([s.array(s.string()), s.string()]));
