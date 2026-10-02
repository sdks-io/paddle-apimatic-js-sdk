import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balanceReportFiltersCreateSchema,
  type BalanceReportFiltersCreate,
} from "./balance-report-filters-create.js";
import { balanceReportTypeSchema, type BalanceReportType } from "./balance-report-type.js";

/** Entity when working with a balance report. Deprecated. */
export type BalanceReport1 = {
  /** Type of report to create. */
  type: BalanceReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters?: BalanceReportFiltersCreate[];
};

export const balanceReport1Schema: Schema<BalanceReport1> = s.object<BalanceReport1>({
  type: balanceReportTypeSchema,
  filters: s.optional(s.array(s.lazy(() => balanceReportFiltersCreateSchema))),
});
