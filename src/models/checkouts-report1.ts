import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutsFiltersCreateSchema, type CheckoutsFiltersCreate } from "./checkouts-filters-create.js";
import { checkoutsReportTypeSchema, type CheckoutsReportType } from "./checkouts-report-type.js";

/** Entity when working with a checkouts report. */
export type CheckoutsReport1 = {
  /** Type of report to create. */
  type: CheckoutsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include checkouts created
   * in the last 30 days. This means `checkout_created_at` is greater than or equal to (`gte`) the
   * date 30 days ago from the time the report was generated. To filter by a specific date range,
   * pass two `checkout_created_at` filters with `gte` and `lt` operators.
   */
  filters?: CheckoutsFiltersCreate[];
};

export const checkoutsReport1Schema: Schema<CheckoutsReport1> = s.object<CheckoutsReport1>({
  type: checkoutsReportTypeSchema,
  filters: s.optional(s.array(s.lazy(() => checkoutsFiltersCreateSchema))),
});
