import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const DiscountsReportType = {
  /**
   * "discounts": { "description": "Discounts reports contain information about your product and
   * checkout discounts." }
   */
  Discounts: "discounts",
} as const;
export type DiscountsReportType =
  | (typeof DiscountsReportType)[keyof typeof DiscountsReportType]
  | (string & {});

export const discountsReportTypeSchema: EnumSchema<DiscountsReportType> =
  s.enumOf<DiscountsReportType>(DiscountsReportType);
