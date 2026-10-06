import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { taxRatesUsedSchema, type TaxRatesUsed } from "./tax-rates-used.js";
import { totals2Schema, type Totals2 } from "./totals2.js";
import {
  transactionPayoutTotalsAdjusted1Schema,
  type TransactionPayoutTotalsAdjusted1,
} from "./transaction-payout-totals-adjusted1.js";
import {
  transactionPayoutTotals1Schema,
  type TransactionPayoutTotals1,
} from "./transaction-payout-totals1.js";
import {
  transactionTotalsAdjusted1Schema,
  type TransactionTotalsAdjusted1,
} from "./transaction-totals-adjusted1.js";

/**
 * Calculated totals for a transaction, including proration, discounts, tax, and currency
 * conversion. Considered the source of truth for totals on a transaction.
 */
export type TransactionDetails1 = {
  /** List of tax rates applied for this transaction. */
  taxRatesUsed: TaxRatesUsed[];
  /**
   * Breakdown of the total for a transaction. These numbers can be negative when dealing with
   * subscription updates that result in credit.
   */
  totals: Totals2;
  /** Breakdown of the totals for a transaction after adjustments. */
  adjustedTotals: TransactionTotalsAdjusted1;
  /**
   * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`.
   * Returned in your payout currency.
   */
  payoutTotals?: TransactionPayoutTotals1 | null;
  /**
   * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
   * is `completed`.
   */
  adjustedPayoutTotals?: TransactionPayoutTotalsAdjusted1 | null;
  /**
   * Information about line items for this transaction. Different from transaction `items` as they
   * include totals calculated by Paddle. Considered the source of truth for line item totals.
   */
  lineItems: LineItem[];
};

export const transactionDetails1Schema: Schema<TransactionDetails1> = s.object<TransactionDetails1>({
  taxRatesUsed: s.array(s.lazy(() => taxRatesUsedSchema)),
  totals: totals2Schema,
  adjustedTotals: transactionTotalsAdjusted1Schema,
  payoutTotals: s.optionalNullable(s.lazy(() => transactionPayoutTotals1Schema)),
  adjustedPayoutTotals: s.optionalNullable(s.lazy(() => transactionPayoutTotalsAdjusted1Schema)),
  lineItems: s.array(s.lazy(() => lineItemSchema)),
  _keysMap: {
    taxRatesUsed: "tax_rates_used",
    adjustedTotals: "adjusted_totals",
    payoutTotals: "payout_totals",
    adjustedPayoutTotals: "adjusted_payout_totals",
    lineItems: "line_items",
  },
});
