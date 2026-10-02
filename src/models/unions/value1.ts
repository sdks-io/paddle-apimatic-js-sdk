import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
 * values for a field.
 */
export type Value1 = string[] | string;

export const value1Schema: Schema<Value1> = s.of<Value1>(s.union([s.array(s.string()), s.string()]));
