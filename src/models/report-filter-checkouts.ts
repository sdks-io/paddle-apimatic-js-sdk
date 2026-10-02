import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutsReportFilterNameSchema,
  type CheckoutsReportFilterName,
} from "./checkouts-report-filter-name.js";
import { operator6Schema, type Operator6 } from "./unions/operator6.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

/** List of filters applied to this report. */
export type ReportFilterCheckouts = {
  /** Field name to filter by. */
  name: CheckoutsReportFilterName;
  /**
   * Operator to use when filtering. Valid when filtering by `checkout_created_at` (must be `gte` or
   * `lt`), `null` otherwise.
   */
  operator: Operator6;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value: Value1;
};

export const reportFilterCheckoutsSchema: Schema<ReportFilterCheckouts> = s.object<ReportFilterCheckouts>({
  name: checkoutsReportFilterNameSchema,
  operator: operator6Schema,
  value: value1Schema,
});
