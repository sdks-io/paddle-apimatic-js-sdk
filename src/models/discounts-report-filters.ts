import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discountsReportFilterNameSchema,
  type DiscountsReportFilterName,
} from "./discounts-report-filter-name.js";
import { filterOperatorSchema, type FilterOperator } from "./filter-operator.js";
import { value1Schema, type Value1 } from "./unions/value1.js";

/** List of filters applied to this report. */
export type DiscountsReportFilters = {
  /** Field name to filter by. */
  name: DiscountsReportFilterName;
  /** Operator to use when filtering. Valid when filtering by `updated_at`, `null` otherwise. */
  operator?: FilterOperator | null;
  /**
   * Value to filter by. Check the allowed values descriptions for the `name` field to see valid
   * values for a field.
   */
  value: Value1;
};

export const discountsReportFiltersSchema: Schema<DiscountsReportFilters> = s.object<DiscountsReportFilters>({
  name: discountsReportFilterNameSchema,
  operator: s.optionalNullable(s.lazy(() => filterOperatorSchema)),
  value: value1Schema,
});
