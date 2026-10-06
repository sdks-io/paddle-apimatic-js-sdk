import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodePayouts1Schema, type CurrencyCodePayouts1 } from "./currency-code-payouts1.js";

/**
 * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`.
 * Returned in your payout currency.
 */
export type TransactionPayoutTotals1 = {
  /** Total before tax and fees. */
  subtotal: string;
  /**
   * Total discount as a result of any discounts applied. Except for percentage discounts, Paddle
   * applies tax to discounts based on the line item `price.tax_mode`. If `price.tax_mode` for a
   * line item is `internal`, Paddle removes tax from the discount applied.
   */
  discount: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
  /**
   * Total credit applied to this transaction. This includes credits applied using a customer's
   * credit balance and adjustments to a `billed` transaction.
   */
  credit: string;
  /**
   * Additional credit generated from negative `details.line_items`. This credit is added to the
   * customer balance.
   */
  creditToBalance: string;
  /** Total due on a transaction after credits and any payments. */
  balance: string;
  /** Total due on a transaction after credits but before any payments. */
  grandTotal: string;
  /**
   * Net tax amount included in `grand_total`. Equals the full `tax` amount unless credits are
   * applied, in which case this value is proportionally reduced.
   */
  grandTotalTax?: string;
  /** Total fee taken by Paddle for this payout. */
  fee: string;
  /** Total earnings for this payout. This is the subtotal minus the Paddle fee. */
  earnings: string;
  /**
   * Three-letter ISO 4217 currency code used for the payout for this transaction. If your primary
   * currency has changed, this reflects the primary currency at the time the transaction was
   * billed.
   */
  currencyCode: CurrencyCodePayouts1;
  /**
   * Currency exchange rate, including margin if applicable. `1.0` if the transaction currency
   * matches your payout currency.
   *
   * @default "1"
   */
  exchangeRate?: string;
  /** Paddle fee rate that was applied to this transaction. */
  feeRate?: string;
};

export const transactionPayoutTotals1Schema: Schema<TransactionPayoutTotals1> =
  s.object<TransactionPayoutTotals1>({
    subtotal: s.string(),
    discount: s.string(),
    tax: s.string(),
    total: s.string(),
    credit: s.string(),
    creditToBalance: s.string(),
    balance: s.string(),
    grandTotal: s.string(),
    grandTotalTax: s.optional(s.string()),
    fee: s.string(),
    earnings: s.string(),
    currencyCode: currencyCodePayouts1Schema,
    exchangeRate: s.defaulted(s.string(), "1"),
    feeRate: s.optional(s.string()),
    _keysMap: {
      creditToBalance: "credit_to_balance",
      grandTotal: "grand_total",
      grandTotalTax: "grand_total_tax",
      currencyCode: "currency_code",
      exchangeRate: "exchange_rate",
      feeRate: "fee_rate",
    },
  });
