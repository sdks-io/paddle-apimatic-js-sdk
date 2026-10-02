import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentTotalsBreakdownSchema,
  type AdjustmentTotalsBreakdown,
} from "./adjustment-totals-breakdown.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Breakdown of all the adjustments made against a transaction in the transaction currency. */
export type AdjustmentTotals1 = {
  /** Total before tax. */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
  /** Total fee taken by Paddle. */
  fee: string;
  /** Total gateway fee retained by Paddle. */
  retainedFee: string;
  /**
   * Total earnings. This is the subtotal minus the Paddle fee. For tax adjustments, this value is
   * negative, which means a positive effect in the transaction earnings. This is because the fee is
   * originally calculated from the transaction total, so if a tax adjustment is made, then the fee
   * portion of it is returned. As a result, the earnings from all the adjustments performed could
   * be either negative, positive or zero.
   */
  earnings: string;
  /** Breakdown of the total adjustments by adjustment action. */
  breakdown: AdjustmentTotalsBreakdown;
  /** Three-letter ISO 4217 currency code used for adjustments for this transaction. */
  currencyCode: CurrencyCode;
};

export const adjustmentTotals1Schema: Schema<AdjustmentTotals1> = s.object<AdjustmentTotals1>({
  subtotal: s.string(),
  tax: s.string(),
  total: s.string(),
  fee: s.string(),
  retainedFee: s.string(),
  earnings: s.string(),
  breakdown: adjustmentTotalsBreakdownSchema,
  currencyCode: currencyCodeSchema,
  _keysMap: {
    retainedFee: "retained_fee",
    currencyCode: "currency_code",
  },
});
