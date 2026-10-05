import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "./filter-operator.js";
import {
  reconciliationReportFilterNameSchema,
  type ReconciliationReportFilterName,
} from "./reconciliation-report-filter-name.js";
import { value5Schema, type Value5 } from "./unions/value5.js";

/** List of filters applied to this report. */
export type ReconciliationFiltersCreate = {
  /** Field name to filter by. */
  name?: ReconciliationReportFilterName;
  /**
   * Operator to use when filtering. Valid when filtering by `transaction_updated_at` or
   * `balance_movement_date`, must be `null` otherwise.
   */
  operator?: FilterOperator | null;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value?: Value5;
};

export const reconciliationFiltersCreateSchema: Schema<ReconciliationFiltersCreate> =
  s.object<ReconciliationFiltersCreate>({
    name: s.optional(s.lazy(() => reconciliationReportFilterNameSchema)),
    operator: s.optionalNullable(s.lazy(() => filterOperatorSchema)),
    value: s.optional(s.lazy(() => value5Schema)),
  });
