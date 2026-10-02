import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentsReports1Schema, type AdjustmentsReports1 } from "../adjustments-reports1.js";
import { balanceReport1Schema, type BalanceReport1 } from "../balance-report1.js";
import { checkoutsReport1Schema, type CheckoutsReport1 } from "../checkouts-report1.js";
import { discountsReport1Schema, type DiscountsReport1 } from "../discounts-report1.js";
import {
  payoutReconciliationReport1Schema,
  type PayoutReconciliationReport1,
} from "../payout-reconciliation-report1.js";
import {
  productsAndPricesReport1Schema,
  type ProductsAndPricesReport1,
} from "../products-and-prices-report1.js";
import { transactionsReports1Schema, type TransactionsReports1 } from "../transactions-reports1.js";

/** Represents a report entity. */
export type ReportCreate =
  | AdjustmentsReports1
  | TransactionsReports1
  | ProductsAndPricesReport1
  | DiscountsReport1
  | BalanceReport1
  | PayoutReconciliationReport1
  | CheckoutsReport1;

export const reportCreateSchema: Schema<ReportCreate> = s.of<ReportCreate>(
  s.union([
    s.lazy(() => adjustmentsReports1Schema),
    s.lazy(() => transactionsReports1Schema),
    s.lazy(() => productsAndPricesReport1Schema),
    s.lazy(() => discountsReport1Schema),
    s.lazy(() => balanceReport1Schema),
    s.lazy(() => payoutReconciliationReport1Schema),
    s.lazy(() => checkoutsReport1Schema),
  ]),
);
