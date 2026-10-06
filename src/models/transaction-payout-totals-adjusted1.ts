import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackFee2Schema, type ChargebackFee2 } from "./chargeback-fee2.js";
import { currencyCodePayouts1Schema, type CurrencyCodePayouts1 } from "./currency-code-payouts1.js";

/**
 * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
 * is `completed`.
 */
export type TransactionPayoutTotalsAdjusted1 = {
  /** Total before tax and fees. */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
  /** Total fee taken by Paddle for this payout. */
  fee: string;
  /** Paddle fees retained for this adjustment. */
  retainedFee?: string;
  /** Details of any chargeback fees incurred for this transaction. */
  chargebackFee: ChargebackFee2;
  /**
   * Total earnings for this payout. This is the subtotal minus the Paddle fee, excluding chargeback
   * fees.
   */
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
   */
  exchangeRate?: string;
};

export const transactionPayoutTotalsAdjusted1Schema: Schema<TransactionPayoutTotalsAdjusted1> =
  s.object<TransactionPayoutTotalsAdjusted1>({
    subtotal: s.string(),
    tax: s.string(),
    total: s.string(),
    fee: s.string(),
    retainedFee: s.optional(s.string()),
    chargebackFee: chargebackFee2Schema,
    earnings: s.string(),
    currencyCode: currencyCodePayouts1Schema,
    exchangeRate: s.optional(s.string()),
    _keysMap: {
      retainedFee: "retained_fee",
      chargebackFee: "chargeback_fee",
      currencyCode: "currency_code",
      exchangeRate: "exchange_rate",
    },
  });
