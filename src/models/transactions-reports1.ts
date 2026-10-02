import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsReportFiltersCreateSchema,
  type TransactionsReportFiltersCreate,
} from "./transactions-report-filters-create.js";
import { transactionsReportTypeSchema, type TransactionsReportType } from "./transactions-report-type.js";

/** Entity when working with reports for transaction or transaction line items. */
export type TransactionsReports1 = {
  /** Type of report to create. */
  type: TransactionsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters?: TransactionsReportFiltersCreate[];
};

export const transactionsReports1Schema: Schema<TransactionsReports1> = s.object<TransactionsReports1>({
  type: transactionsReportTypeSchema,
  filters: s.optional(s.array(s.lazy(() => transactionsReportFiltersCreateSchema))),
});
