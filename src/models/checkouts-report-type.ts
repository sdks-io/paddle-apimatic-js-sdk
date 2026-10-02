import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const CheckoutsReportType = {
  /**
   * "checkouts": { "description": "Checkouts reports contain information about your checkouts,
   * including conversion and recovery data for each checkout session." }
   */
  Checkouts: "checkouts",
} as const;
export type CheckoutsReportType =
  | (typeof CheckoutsReportType)[keyof typeof CheckoutsReportType]
  | (string & {});

export const checkoutsReportTypeSchema: EnumSchema<CheckoutsReportType> =
  s.enumOf<CheckoutsReportType>(CheckoutsReportType);
