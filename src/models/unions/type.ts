import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentTypeSchema, type AdjustmentType } from "../adjustment-type.js";

/**
 * Type of adjustment. Use `full` to adjust the grand total for the related transaction. Include an
 * `items` array when creating a `partial` adjustment. If omitted, defaults to `partial`.
 */
export type Type = AdjustmentType;

export const typeSchema: Schema<Type> = s.of<Type>(s.union([s.lazy(() => adjustmentTypeSchema)]));
