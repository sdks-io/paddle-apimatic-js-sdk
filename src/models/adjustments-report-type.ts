import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const AdjustmentsReportType = {
  /**
   * "adjustments": { "description": "Adjustments reports contain information about refunds,
   * credits, and chargebacks." }
   */
  Adjustments: "adjustments",
  /**
   * "adjustment_line_items": { "description": "Adjustments reports contain information about
   * refunds, credits, and chargebacks. The report is broken down by line item level." }
   */
  AdjustmentLineItems: "adjustment_line_items",
} as const;
export type AdjustmentsReportType =
  | (typeof AdjustmentsReportType)[keyof typeof AdjustmentsReportType]
  | (string & {});

export const adjustmentsReportTypeSchema: EnumSchema<AdjustmentsReportType> =
  s.enumOf<AdjustmentsReportType>(AdjustmentsReportType);
