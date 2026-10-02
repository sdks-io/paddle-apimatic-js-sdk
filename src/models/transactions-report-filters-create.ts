import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsReportFilterNameSchema,
  type TransactionsReportFilterName,
} from "./transactions-report-filter-name.js";
import { operatorSchema, type Operator } from "./unions/operator.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

export type TransactionsReportFiltersCreate = {
  /** Field name to filter by. */
  name?: TransactionsReportFilterName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator?: Operator;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value?: Value1;
};

export const transactionsReportFiltersCreateSchema: Schema<TransactionsReportFiltersCreate> =
  s.object<TransactionsReportFiltersCreate>({
    name: s.optional(s.lazy(() => transactionsReportFilterNameSchema)),
    operator: s.optional(s.lazy(() => operatorSchema)),
    value: s.optional(s.lazy(() => value1Schema)),
  });
