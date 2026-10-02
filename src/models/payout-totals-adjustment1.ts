import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackFeeSchema, type ChargebackFee } from "./chargeback-fee.js";
import { currencyCodePayouts1Schema, type CurrencyCodePayouts1 } from "./currency-code-payouts1.js";

/** Breakdown of how this adjustment affects your payout balance. */
export type PayoutTotalsAdjustment1 = {
  /** Adjustment total before tax and fees. */
  subtotal: string;
  /** Total tax on the adjustment subtotal. */
  tax: string;
  /** Adjustment total after tax. */
  total: string;
  /** Adjusted Paddle fee. */
  fee: string;
  /** Paddle fees retained for this adjustment. */
  retainedFee: string;
  /**
   * Chargeback fees incurred for this adjustment. Only returned when the adjustment `action` is
   * `chargeback` or `chargeback_warning`.
   */
  chargebackFee?: ChargebackFee;
  /**
   * Adjusted payout earnings. This is the adjustment total plus adjusted Paddle fees, excluding
   * chargeback fees.
   */
  earnings: string;
  /**
   * Three-letter ISO 4217 currency code used for the payout for this transaction. If your primary
   * currency has changed, this reflects the primary currency at the time the transaction was
   * billed.
   */
  currencyCode: CurrencyCodePayouts1;
};

export const payoutTotalsAdjustment1Schema: Schema<PayoutTotalsAdjustment1> =
  s.object<PayoutTotalsAdjustment1>({
    subtotal: s.string(),
    tax: s.string(),
    total: s.string(),
    fee: s.string(),
    retainedFee: s.string(),
    chargebackFee: s.optional(s.lazy(() => chargebackFeeSchema)),
    earnings: s.string(),
    currencyCode: currencyCodePayouts1Schema,
    _keysMap: {
      retainedFee: "retained_fee",
      chargebackFee: "chargeback_fee",
      currencyCode: "currency_code",
    },
  });
