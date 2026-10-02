import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totals1Schema, type Totals1 } from "./totals1.js";

export type TaxRatesUsed = {
  /** Rate used to calculate tax for this transaction. */
  taxRate: string;
  /** Calculated totals for the tax applied to this transaction. */
  totals: Totals1;
};

export const taxRatesUsedSchema: Schema<TaxRatesUsed> = s.object<TaxRatesUsed>({
  taxRate: s.string(),
  totals: totals1Schema,
  _keysMap: {
    taxRate: "tax_rate",
  },
});
