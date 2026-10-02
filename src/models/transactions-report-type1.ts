import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report to create. */
export const TransactionsReportType1 = {
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
export type TransactionsReportType1 =
  | (typeof TransactionsReportType1)[keyof typeof TransactionsReportType1]
  | (string & {});

export const transactionsReportType1Schema: EnumSchema<TransactionsReportType1> =
  s.enumOf<TransactionsReportType1>(TransactionsReportType1);
