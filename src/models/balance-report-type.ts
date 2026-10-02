import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const BalanceReportType = {
  /**
   * "balance": { "description": "Balance reports contain information about your account balance
   * activity, including all movements of funds in and out of your balance. Deprecated.",
   * "deprecated": true }
   */
  Balance: "balance",
} as const;
export type BalanceReportType = (typeof BalanceReportType)[keyof typeof BalanceReportType] | (string & {});

export const balanceReportTypeSchema: EnumSchema<BalanceReportType> =
  s.enumOf<BalanceReportType>(BalanceReportType);
