import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionLineItemPreviewSchema,
  type TransactionLineItemPreview,
} from "./transaction-line-item-preview.js";
import {
  transactionPreviewDetailsTaxRatesUsedItemSchema,
  type TransactionPreviewDetailsTaxRatesUsedItem,
} from "./transaction-preview-details-tax-rates-used-item.js";
import { transactionTotalsSchema, type TransactionTotals } from "./transaction-totals.js";

/**
 * Calculated totals for a transaction preview, including discounts, tax, and currency conversion.
 * Considered the source of truth for totals on a transaction preview.
 */
export type TransactionDetailsPreview = {
  /** List of tax rates applied to this transaction preview. */
  taxRatesUsed: TransactionPreviewDetailsTaxRatesUsedItem[];
  /**
   * Breakdown of the total for a transaction preview. `fee` and `earnings` always return `null` for
   * transaction previews.
   */
  totals: TransactionTotals;
  /**
   * Information about line items for this transaction preview. Different from transaction preview
   * `items` as they include totals calculated by Paddle. Considered the source of truth for line
   * item totals.
   */
  lineItems: TransactionLineItemPreview[];
};

export const transactionDetailsPreviewSchema: Schema<TransactionDetailsPreview> =
  s.object<TransactionDetailsPreview>({
    taxRatesUsed: s.array(s.lazy(() => transactionPreviewDetailsTaxRatesUsedItemSchema)),
    totals: transactionTotalsSchema,
    lineItems: s.array(s.lazy(() => transactionLineItemPreviewSchema)),
    _keysMap: {
      taxRatesUsed: "tax_rates_used",
      lineItems: "line_items",
    },
  });
