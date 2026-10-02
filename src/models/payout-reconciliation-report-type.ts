import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const PayoutReconciliationReportType = {
  /**
   * "payout_reconciliation": { "description": "Payout reconciliation reports contain information
   * about your payout activity, including all transactions and adjustments that make up specific
   * payouts." }
   */
  PayoutReconciliation: "payout_reconciliation",
} as const;
export type PayoutReconciliationReportType =
  | (typeof PayoutReconciliationReportType)[keyof typeof PayoutReconciliationReportType]
  | (string & {});

export const payoutReconciliationReportTypeSchema: EnumSchema<PayoutReconciliationReportType> =
  s.enumOf<PayoutReconciliationReportType>(PayoutReconciliationReportType);
