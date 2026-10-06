import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentsReportFilters1Schema,
  type AdjustmentsReportFilters1,
} from "./adjustments-report-filters1.js";
import { adjustmentsReportType1Schema, type AdjustmentsReportType1 } from "./adjustments-report-type1.js";
import { ReportStatus, reportStatusSchema } from "./report-status.js";

/** Report entity when working with adjustments reports. */
export type ReportAdjustments = {
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
  type: AdjustmentsReportType1;
  /**
   * Filter criteria for this report. If omitted, reports are filtered to include data updated in
   * the last 30 days. This means `updated_at` is greater than or equal to (`gte`) the date 30 days
   * ago from the time the report was generated.
   */
  filters: AdjustmentsReportFilters1[];
};

export const reportAdjustmentsSchema: Schema<ReportAdjustments> = s.object<ReportAdjustments>({
  id: s.string(),
  status: s.defaulted(reportStatusSchema, ReportStatus.Pending),
  rows: s.optionalNullable(s.int()),
  expiresAt: s.optionalNullable(s.dateTime()),
  updatedAt: s.dateTime(),
  createdAt: s.dateTime(),
  type: adjustmentsReportType1Schema,
  filters: s.array(s.lazy(() => adjustmentsReportFilters1Schema)),
  _keysMap: {
    expiresAt: "expires_at",
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
