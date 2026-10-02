import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportStatusQueryEnum = {
  /**
   * "pending": { "description": "Return reports where the status is `pending`. Returned reports are
   * created, but Paddle is processing them." }
   */
  Pending: "pending",
  /**
   * "ready": { "description": "Return reports where the status is `ready`. Returned reports are
   * fully processed and are ready for download." }
   */
  Ready: "ready",
  /**
   * "failed": { "description": "Return reports where the status is `failed`. Returned reports
   * encountered problems in processing." }
   */
  Failed: "failed",
  /**
   * "expired": { "description": "Return reports where the status is `expired`. Returned reports are
   * no longer accessible." }
   */
  Expired: "expired",
} as const;
export type ReportStatusQueryEnum =
  | (typeof ReportStatusQueryEnum)[keyof typeof ReportStatusQueryEnum]
  | (string & {});

export const reportStatusQueryEnumSchema: EnumSchema<ReportStatusQueryEnum> =
  s.enumOf<ReportStatusQueryEnum>(ReportStatusQueryEnum);
