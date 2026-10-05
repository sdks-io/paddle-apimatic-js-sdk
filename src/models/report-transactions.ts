import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ReportStatus, reportStatusSchema } from "./report-status.js";
import {
  transactionsReportFiltersSchema,
  type TransactionsReportFilters,
} from "./transactions-report-filters.js";
import { transactionsReportType1Schema, type TransactionsReportType1 } from "./transactions-report-type1.js";

/** Report entity when working with transactions reports. */
export type ReportTransactions = {
  /** Unique Paddle ID for this report, prefixed with `rep_` */
  id: string;
  /**
   * Status of this report. Set automatically by Paddle.
   *
   * Reports are created as `pending` initially, then move to `ready` when they're available to
   * download.
   *
   * @default ReportStatus.Pending
   */
  status?: ReportStatus;
  /** Number of records in this report. `null` if the report is `pending`. */
  rows: number | null;
  /**
   * RFC 3339 datetime string of when this report expires. The report is no longer available to
   * download after this date.
   */
  expiresAt: Date | null;
  /** RFC 3339 datetime string of when this report was last updated. */
  updatedAt: Date;
  /** RFC 3339 datetime string of when this report was created. */
  createdAt: Date;
  /** Type of report to create. */
  type: TransactionsReportType1;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters: TransactionsReportFilters[];
};

export const reportTransactionsSchema: Schema<ReportTransactions> = s.object<ReportTransactions>({
  id: s.string(),
  status: s.defaulted(reportStatusSchema, ReportStatus.Pending),
  rows: s.nullable(s.int()),
  expiresAt: s.nullable(s.dateTime()),
  updatedAt: s.dateTime(),
  createdAt: s.dateTime(),
  type: transactionsReportType1Schema,
  filters: s.array(s.lazy(() => transactionsReportFiltersSchema)),
  _keysMap: {
    expiresAt: "expires_at",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
