import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentTaxRateUsed1Schema, type AdjustmentTaxRateUsed1 } from "../adjustment-tax-rate-used1.js";

export type TaxRatesUsed1 = AdjustmentTaxRateUsed1[];

export const taxRatesUsed1Schema: Schema<TaxRatesUsed1> = s.of<TaxRatesUsed1>(
  s.union([s.array(s.lazy(() => adjustmentTaxRateUsed1Schema))]),
);
