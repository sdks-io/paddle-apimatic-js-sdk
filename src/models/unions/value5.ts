import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { balanceMovementTypeSchema } from "../balance-movement-type.js";

/**
 * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
 * values for a field.
 */
export type Value5 = string[] | string;

export const value5Schema: Schema<Value5> = s.of<Value5>(
  s.union([s.array(s.string()), s.string(), s.array(s.lazy(() => balanceMovementTypeSchema))]),
);
