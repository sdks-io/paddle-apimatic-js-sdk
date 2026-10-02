import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentTaxRateUsedTotals1Schema,
  type AdjustmentTaxRateUsedTotals1,
} from "./adjustment-tax-rate-used-totals1.js";

/** List of tax rates applied for this adjustment. */
export type AdjustmentTaxRateUsed1 = {
  /** Rate used to calculate tax for this adjustment. */
  taxRate: string;
  /** Calculated totals for the tax applied to this adjustment. */
  totals: AdjustmentTaxRateUsedTotals1;
};

export const adjustmentTaxRateUsed1Schema: Schema<AdjustmentTaxRateUsed1> = s.object<AdjustmentTaxRateUsed1>({
  taxRate: s.string(),
  totals: adjustmentTaxRateUsedTotals1Schema,
  _keysMap: {
    taxRate: "tax_rate",
  },
});
