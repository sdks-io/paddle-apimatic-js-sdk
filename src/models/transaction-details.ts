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
  transactionTotalsAdjustedSchema,
  type TransactionTotalsAdjusted,
} from "./transaction-totals-adjusted.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";
import { adjustedPayoutTotalsSchema, type AdjustedPayoutTotals } from "./unions/adjusted-payout-totals.js";
import { payoutTotals1Schema, type PayoutTotals1 } from "./unions/payout-totals1.js";

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
  payoutTotals: PayoutTotals1;
  /**
   * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
   * is `completed`.
   */
  adjustedPayoutTotals: AdjustedPayoutTotals;
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
  payoutTotals: payoutTotals1Schema,
  adjustedPayoutTotals: adjustedPayoutTotalsSchema,
  lineItems: s.array(s.lazy(() => transactionDetailsLineItemSchema)),
  _keysMap: {
    taxRatesUsed: "tax_rates_used",
    adjustedTotals: "adjusted_totals",
    payoutTotals: "payout_totals",
    adjustedPayoutTotals: "adjusted_payout_totals",
    lineItems: "line_items",
  },
});
