import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "./filter-operator.js";
import {
  transactionsReportFilterNameSchema,
  type TransactionsReportFilterName,
} from "./transactions-report-filter-name.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

export type TransactionsReportFilters = {
  /** Field name to filter by. */
  name: TransactionsReportFilterName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator: FilterOperator | null;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value: Value1;
};

export const transactionsReportFiltersSchema: Schema<TransactionsReportFilters> =
  s.object<TransactionsReportFilters>({
    name: transactionsReportFilterNameSchema,
    operator: s.nullable(s.lazy(() => filterOperatorSchema)),
    value: value1Schema,
  });
