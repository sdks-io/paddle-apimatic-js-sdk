import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ReportStatus, reportStatusSchema } from "./report-status.js";
import {
  transactionsReportFiltersSchema,
  type TransactionsReportFilters,
} from "./transactions-report-filters.js";
import { transactionsReportTypeSchema, type TransactionsReportType } from "./transactions-report-type.js";

/** Entity when working with reports for transaction or transaction line items. */
export type TransactionsReports = {
  /** Unique Paddle ID for this report, prefixed with `rep_` */
  id: string;
  /** @default ReportStatus.Pending */
  status?: ReportStatus;
  /** Number of records in this report. `null` if the report is `pending`. */
  rows?: number | null;
  /**
   * RFC 3339 datetime string of when this report expires. The report is no longer available to
   * download after this date.
   */
  expiresAt?: Date | null;
  /** RFC 3339 datetime string of when this report was last updated. */
  updatedAt: Date;
  /** RFC 3339 datetime string of when this report was created. */
  createdAt: Date;
  /** Type of report to create. */
  type: TransactionsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters: TransactionsReportFilters[];
};

export const transactionsReportsSchema: Schema<TransactionsReports> = s.object<TransactionsReports>({
  id: s.string(),
  status: s.defaulted(reportStatusSchema, ReportStatus.Pending),
  rows: s.optionalNullable(s.int()),
  expiresAt: s.optionalNullable(s.dateTime()),
  updatedAt: s.dateTime(),
  createdAt: s.dateTime(),
  type: transactionsReportTypeSchema,
  filters: s.array(s.lazy(() => transactionsReportFiltersSchema)),
  _keysMap: {
    expiresAt: "expires_at",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
