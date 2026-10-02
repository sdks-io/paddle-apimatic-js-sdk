import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportAdjustmentsSchema, type ReportAdjustments } from "../report-adjustments.js";
import { reportDiscountsSchema, type ReportDiscounts } from "../report-discounts.js";
import { reportProductsPricesSchema, type ReportProductsPrices } from "../report-products-prices.js";
import { reportTransactionsSchema, type ReportTransactions } from "../report-transactions.js";

/** New or changed entity. */
export type Data351 = ReportAdjustments | ReportTransactions | ReportProductsPrices | ReportDiscounts;

export const data351Schema: Schema<Data351> = s.of<Data351>(
  s.union([
    s.lazy(() => reportAdjustmentsSchema),
    s.lazy(() => reportTransactionsSchema),
    s.lazy(() => reportProductsPricesSchema),
    s.lazy(() => reportDiscountsSchema),
  ]),
);
