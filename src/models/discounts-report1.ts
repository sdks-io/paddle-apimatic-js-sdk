import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  discountsReportFiltersCreateSchema,
  type DiscountsReportFiltersCreate,
} from "./discounts-report-filters-create.js";
import { discountsReportTypeSchema, type DiscountsReportType } from "./discounts-report-type.js";

/** Entity when working with a discounts report. */
export type DiscountsReport1 = {
  /** Type of report to create. */
  type: DiscountsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters?: DiscountsReportFiltersCreate[];
};

export const discountsReport1Schema: Schema<DiscountsReport1> = s.object<DiscountsReport1>({
  type: discountsReportTypeSchema,
  filters: s.optional(s.array(s.lazy(() => discountsReportFiltersCreateSchema))),
});
