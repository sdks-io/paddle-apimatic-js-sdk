import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCode70Schema, type CurrencyCode70 } from "./currency-code70.js";
import { earningsSchema, type Earnings } from "./unions/earnings.js";
import { feeSchema, type Fee } from "./unions/fee.js";

/**
 * Breakdown of the total for a transaction. These numbers can be negative when dealing with
 * subscription updates that result in credit.
 */
export type Totals2 = {
  /**
   * Subtotal before discount, tax, and deductions. If an item, unit price multiplied by quantity.
   */
  subtotal: string;
  /**
   * Total discount as a result of any discounts applied.
   *
   * Except for percentage discounts, Paddle applies tax to discounts based on the line item
   * `price.tax_mode`. If `price.tax_mode` for a line item is `internal`, Paddle removes tax from
   * the discount applied.
   */
  discount: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after discount and tax. */
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
  grandTotalTax: string;
  /**
   * Total fee taken by Paddle for this transaction. `null` until the transaction is `completed` and
   * the fee is processed.
   */
  fee: Fee;
  /**
   * Total earnings for this transaction. This is the total minus the Paddle fee. `null` until the
   * transaction is `completed` and the fee is processed.
   */
  earnings: Earnings;
  /** Three-letter ISO 4217 currency code of the currency used for this transaction. */
  currencyCode: CurrencyCode70;
};

export const totals2Schema: Schema<Totals2> = s.object<Totals2>({
  subtotal: s.string(),
  discount: s.string(),
  tax: s.string(),
  total: s.string(),
  credit: s.string(),
  creditToBalance: s.string(),
  balance: s.string(),
  grandTotal: s.string(),
  grandTotalTax: s.string(),
  fee: feeSchema,
  earnings: earningsSchema,
  currencyCode: currencyCode70Schema,
  _keysMap: {
    creditToBalance: "credit_to_balance",
    grandTotal: "grand_total",
    grandTotalTax: "grand_total_tax",
    currencyCode: "currency_code",
  },
});
