import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of this report. Set automatically by Paddle.
 *
 * Reports are created as `pending` initially, then move to `ready` when they're available to
 * download.
 */
export const ReportStatus = {
  /**
   * "pending": { "description": "Report created, but Paddle is processing it. It's not yet ready
   * for download." }
   */
  Pending: "pending",
  /** "ready": { "description": "Report fully processed by Paddle and ready for download." } */
  Ready: "ready",
  /** "failed": { "description": "There was a problem processing this report." } */
  Failed: "failed",
  /** "expired": { "description": "Report has expired and is no longer accessible." } */
  Expired: "expired",
} as const;
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus] | (string & {});

export const reportStatusSchema: EnumSchema<ReportStatus> = s.enumOf<ReportStatus>(ReportStatus);
