import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Breakdown of the totals for a transaction after adjustments. */
export type TransactionTotalsAdjusted = {
  /**
   * Subtotal before discount, tax, and deductions. If an item, unit price multiplied by quantity.
   */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
  /** Total due after credits but before any payments. */
  grandTotal: string;
  /**
   * Net tax amount included in `grand_total`. Equals the full `tax` amount unless credits are
   * applied, in which case this value is proportionally reduced.
   */
  grandTotalTax: string;
  /**
   * Total fee taken by Paddle for this transaction. `null` until the transaction is `completed` and
   * the fee is processed.
   */
  fee?: string | null;
  /** Total Paddle fees retained for this adjustment. */
  retainedFee: string;
  /**
   * Total earnings for this transaction. This is the total minus the Paddle fee. `null` until the
   * transaction is `completed` and the fee is processed.
   */
  earnings?: string | null;
  /** Three-letter ISO 4217 currency code of the currency used for this transaction. */
  currencyCode: CurrencyCode;
};

export const transactionTotalsAdjustedSchema: Schema<TransactionTotalsAdjusted> =
  s.object<TransactionTotalsAdjusted>({
    subtotal: s.string(),
    tax: s.string(),
    total: s.string(),
    grandTotal: s.string(),
    grandTotalTax: s.string(),
    fee: s.optionalNullable(s.string()),
    retainedFee: s.string(),
    earnings: s.optionalNullable(s.string()),
    currencyCode: currencyCodeSchema,
    _keysMap: {
      grandTotal: "grand_total",
      grandTotalTax: "grand_total_tax",
      retainedFee: "retained_fee",
      currencyCode: "currency_code",
    },
  });
