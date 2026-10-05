import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOperatorSchema, type FilterOperator } from "./filter-operator.js";
import {
  reportFilterAdjustmentsNameSchema,
  type ReportFilterAdjustmentsName,
} from "./report-filter-adjustments-name.js";
import { valueSchema, type Value } from "./unions/value.js";

/**
 * Filter criteria for this report. If omitted when creating, reports are filtered to include data
 * updated in the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date
 * 30 days ago from the time the report was generated.
 */
export type AdjustmentsReportFilters = {
  /** Field name to filter by. */
  name: ReportFilterAdjustmentsName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator: FilterOperator | null;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value: Value;
};

export const adjustmentsReportFiltersSchema: Schema<AdjustmentsReportFilters> =
  s.object<AdjustmentsReportFilters>({
    name: reportFilterAdjustmentsNameSchema,
    operator: s.nullable(s.lazy(() => filterOperatorSchema)),
    value: valueSchema,
  });
