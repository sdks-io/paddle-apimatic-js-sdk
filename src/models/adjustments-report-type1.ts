import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report to create. */
export const AdjustmentsReportType1 = {
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
export type AdjustmentsReportType1 =
  | (typeof AdjustmentsReportType1)[keyof typeof AdjustmentsReportType1]
  | (string & {});

export const adjustmentsReportType1Schema: EnumSchema<AdjustmentsReportType1> =
  s.enumOf<AdjustmentsReportType1>(AdjustmentsReportType1);
