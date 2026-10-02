import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentActionSchema } from "../adjustment-action.js";
import { adjustmentStatusSchema } from "../adjustment-status.js";

/**
 * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
 * values for a field.
 */
export type Value = Date | string | string[];

export const valueSchema: Schema<Value> = s.of<Value>(
  s.union([
    s.array(s.lazy(() => adjustmentStatusSchema)),
    s.array(s.lazy(() => adjustmentActionSchema)),
    s.dateTime(),
    s.dateOnly(),
    s.array(s.string()),
    s.string(),
  ]),
);
