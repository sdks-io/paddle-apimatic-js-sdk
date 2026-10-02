import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentsReportsSchema, type AdjustmentsReports } from "../adjustments-reports.js";
import { balanceReportSchema, type BalanceReport } from "../balance-report.js";
import { checkoutsReportSchema, type CheckoutsReport } from "../checkouts-report.js";
import { discountsReportSchema, type DiscountsReport } from "../discounts-report.js";
import {
  payoutReconciliationReportSchema,
  type PayoutReconciliationReport,
} from "../payout-reconciliation-report.js";
import {
  productsAndPricesReportSchema,
  type ProductsAndPricesReport,
} from "../products-and-prices-report.js";
import { transactionsReportsSchema, type TransactionsReports } from "../transactions-reports.js";

/** Represents a report entity. */
export type Report =
  | AdjustmentsReports
  | TransactionsReports
  | ProductsAndPricesReport
  | DiscountsReport
  | BalanceReport
  | PayoutReconciliationReport
  | CheckoutsReport;

export const reportSchema: Schema<Report> = s.of<Report>(
  s.union([
    s.lazy(() => adjustmentsReportsSchema),
    s.lazy(() => transactionsReportsSchema),
    s.lazy(() => productsAndPricesReportSchema),
    s.lazy(() => discountsReportSchema),
    s.lazy(() => balanceReportSchema),
    s.lazy(() => payoutReconciliationReportSchema),
    s.lazy(() => checkoutsReportSchema),
  ]),
);
