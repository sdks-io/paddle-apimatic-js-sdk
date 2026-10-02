import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentTaxRateUsedTotalsSchema,
  type AdjustmentTaxRateUsedTotals,
} from "./adjustment-tax-rate-used-totals.js";

/** List of tax rates applied for this adjustment. */
export type AdjustmentTaxRateUsed = {
  /** Rate used to calculate tax for this adjustment. */
  taxRate: string;
  /** Calculated totals for the tax applied to this adjustment. */
  totals: AdjustmentTaxRateUsedTotals;
};

export const adjustmentTaxRateUsedSchema: Schema<AdjustmentTaxRateUsed> = s.object<AdjustmentTaxRateUsed>({
  taxRate: s.string(),
  totals: adjustmentTaxRateUsedTotalsSchema,
  _keysMap: {
    taxRate: "tax_rate",
  },
});
