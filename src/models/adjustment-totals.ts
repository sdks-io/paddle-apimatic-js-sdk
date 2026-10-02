import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Breakdown of the total for an adjustment. */
export type AdjustmentTotals = {
  /** Total before tax. For tax adjustments, the value is 0. */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
  /** Total fee taken by Paddle for this adjustment. */
  fee: string;
  /** Paddle fees retained for this adjustment. */
  retainedFee?: string;
  /**
   * Total earnings. This is the subtotal minus the Paddle fee. For tax adjustments, this value is
   * negative, which means a positive effect in the transaction earnings. This is because the fee is
   * originally calculated from the transaction total, so if a tax adjustment is made, then the fee
   * portion of it is returned.
   */
  earnings: string;
  /** Three-letter ISO 4217 currency code used for this adjustment. */
  currencyCode: CurrencyCode;
};

export const adjustmentTotalsSchema: Schema<AdjustmentTotals> = s.object<AdjustmentTotals>({
  subtotal: s.string(),
  tax: s.string(),
  total: s.string(),
  fee: s.string(),
  retainedFee: s.optional(s.string()),
  earnings: s.string(),
  currencyCode: currencyCodeSchema,
  _keysMap: {
    retainedFee: "retained_fee",
    currencyCode: "currency_code",
  },
});
