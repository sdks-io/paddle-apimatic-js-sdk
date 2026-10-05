import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDetailsLineItemSchema,
  type TransactionDetailsLineItem,
} from "./transaction-details-line-item.js";
import {
  transactionDetailsTaxRatesUsedItemSchema,
  type TransactionDetailsTaxRatesUsedItem,
} from "./transaction-details-tax-rates-used-item.js";
import {
  transactionPayoutTotalsAdjustedSchema,
  type TransactionPayoutTotalsAdjusted,
} from "./transaction-payout-totals-adjusted.js";
import { transactionPayoutTotalsSchema, type TransactionPayoutTotals } from "./transaction-payout-totals.js";
import {
  transactionTotalsAdjustedSchema,
  type TransactionTotalsAdjusted,
} from "./transaction-totals-adjusted.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

/**
 * Calculated totals for a transaction, including proration, discounts, tax, and currency
 * conversion. Considered the source of truth for totals on a transaction.
 */
export type TransactionDetails = {
  /** List of tax rates applied for this transaction. */
  taxRatesUsed: TransactionDetailsTaxRatesUsedItem[];
  /**
   * Breakdown of the total for a transaction. These numbers can be negative when dealing with
   * subscription updates that result in credit.
   */
  totals: TransactionTotals;
  /** Breakdown of the totals for a transaction after adjustments. */
  adjustedTotals: TransactionTotalsAdjusted;
  /**
   * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`.
   * Returned in your payout currency.
   */
  payoutTotals: TransactionPayoutTotals | null;
  /**
   * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
   * is `completed`.
   */
  adjustedPayoutTotals: TransactionPayoutTotalsAdjusted | null;
  /**
   * Information about line items for this transaction. Different from transaction `items` as they
   * include totals calculated by Paddle. Considered the source of truth for line item totals.
   */
  lineItems: TransactionDetailsLineItem[];
};

export const transactionDetailsSchema: Schema<TransactionDetails> = s.object<TransactionDetails>({
  taxRatesUsed: s.array(s.lazy(() => transactionDetailsTaxRatesUsedItemSchema)),
  totals: transactionTotalsSchema,
  adjustedTotals: transactionTotalsAdjustedSchema,
  payoutTotals: s.nullable(s.lazy(() => transactionPayoutTotalsSchema)),
  adjustedPayoutTotals: s.nullable(s.lazy(() => transactionPayoutTotalsAdjustedSchema)),
  lineItems: s.array(s.lazy(() => transactionDetailsLineItemSchema)),
  _keysMap: {
    taxRatesUsed: "tax_rates_used",
    adjustedTotals: "adjusted_totals",
    payoutTotals: "payout_totals",
    adjustedPayoutTotals: "adjusted_payout_totals",
    lineItems: "line_items",
  },
});
