import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report. */
export const TransactionsReportType = {
  /**
   * "transactions": { "description": "Transactions reports contain information about revenue
   * received, past due invoices, draft and issued invoices, and canceled transactions." }
   */
  Transactions: "transactions",
  /**
   * "transaction_line_items": { "description": "Transactions reports contain information about
   * revenue received, past due invoices, draft and issued invoices, and canceled transactions. The
   * report is broken down by line item level." }
   */
  TransactionLineItems: "transaction_line_items",
} as const;
export type TransactionsReportType =
  | (typeof TransactionsReportType)[keyof typeof TransactionsReportType]
  | (string & {});

export const transactionsReportTypeSchema: EnumSchema<TransactionsReportType> =
  s.enumOf<TransactionsReportType>(TransactionsReportType);
