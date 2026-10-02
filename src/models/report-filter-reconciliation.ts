import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  reconciliationReportFilterNameSchema,
  type ReconciliationReportFilterName,
} from "./reconciliation-report-filter-name.js";
import { operator5Schema, type Operator5 } from "./unions/operator5.js";
import { value5Schema, type Value5 } from "./unions/value5.js";

/** List of filters applied to this report. */
export type ReportFilterReconciliation = {
  /** Field name to filter by. */
  name: ReconciliationReportFilterName;
  /**
   * Operator to use when filtering. Valid when filtering by `transaction_updated_at` or
   * `balance_movement_date`, must be `null` otherwise.
   */
  operator: Operator5;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value: Value5;
};

export const reportFilterReconciliationSchema: Schema<ReportFilterReconciliation> =
  s.object<ReportFilterReconciliation>({
    name: reconciliationReportFilterNameSchema,
    operator: operator5Schema,
    value: value5Schema,
  });
