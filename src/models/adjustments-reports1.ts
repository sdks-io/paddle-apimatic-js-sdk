import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentsReportFiltersCreateSchema,
  type AdjustmentsReportFiltersCreate,
} from "./adjustments-report-filters-create.js";
import { adjustmentsReportTypeSchema, type AdjustmentsReportType } from "./adjustments-report-type.js";

/** Entity when working with reports for adjustments or adjustment line items. */
export type AdjustmentsReports1 = {
  /** Type of report to create. */
  type: AdjustmentsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters?: AdjustmentsReportFiltersCreate[];
};

export const adjustmentsReports1Schema: Schema<AdjustmentsReports1> = s.object<AdjustmentsReports1>({
  type: adjustmentsReportTypeSchema,
  filters: s.optional(s.array(s.lazy(() => adjustmentsReportFiltersCreateSchema))),
});
