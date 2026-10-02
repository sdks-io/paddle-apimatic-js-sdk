import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "../filter-operator.js";

/** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
export type Operator = FilterOperator;

export const operatorSchema: Schema<Operator> = s.of<Operator>(s.union([s.lazy(() => filterOperatorSchema)]));
