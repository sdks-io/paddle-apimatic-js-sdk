import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Calculated totals for the tax applied to this adjustment. */
export type AdjustmentTaxRateUsedTotals = {
  /** Total before tax. For tax adjustments, the value is 0. */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
};

export const adjustmentTaxRateUsedTotalsSchema: Schema<AdjustmentTaxRateUsedTotals> =
  s.object<AdjustmentTaxRateUsedTotals>({
    subtotal: s.string(),
    tax: s.string(),
    total: s.string(),
  });
