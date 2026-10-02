import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "../filter-operator.js";

/**
 * Operator to use when filtering. Valid when filtering by `checkout_created_at` (must be `gte` or
 * `lt`), `null` otherwise.
 */
export type Operator6 = FilterOperator;

export const operator6Schema: Schema<Operator6> = s.of<Operator6>(
  s.union([s.lazy(() => filterOperatorSchema)]),
);
