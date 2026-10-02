import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "../filter-operator.js";

/**
 * Operator to use when filtering. Valid when filtering by `transaction_updated_at` or
 * `balance_movement_date`, must be `null` otherwise.
 */
export type Operator5 = FilterOperator;

export const operator5Schema: Schema<Operator5> = s.of<Operator5>(
  s.union([s.lazy(() => filterOperatorSchema)]),
);
