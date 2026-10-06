import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutsReportTypeSchema, type CheckoutsReportType } from "./checkouts-report-type.js";
import { reportFilterCheckoutsSchema, type ReportFilterCheckouts } from "./report-filter-checkouts.js";
import { ReportStatus, reportStatusSchema } from "./report-status.js";

/** Entity when working with a checkouts report. */
export type CheckoutsReport = {
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
  type: CheckoutsReportType;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include checkouts created
   * in the last 30 days. This means `checkout_created_at` is greater than or equal to (`gte`) the
   * date 30 days ago from the time the report was generated. To filter by a specific date range,
   * pass two `checkout_created_at` filters with `gte` and `lt` operators.
   */
  filters: ReportFilterCheckouts[];
};

export const checkoutsReportSchema: Schema<CheckoutsReport> = s.object<CheckoutsReport>({
  id: s.string(),
  status: s.defaulted(reportStatusSchema, ReportStatus.Pending),
  rows: s.optionalNullable(s.int()),
  expiresAt: s.optionalNullable(s.dateTime()),
  updatedAt: s.dateTime(),
  createdAt: s.dateTime(),
  type: checkoutsReportTypeSchema,
  filters: s.array(s.lazy(() => reportFilterCheckoutsSchema)),
  _keysMap: {
    expiresAt: "expires_at",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
