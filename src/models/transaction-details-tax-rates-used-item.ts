import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalsSchema, type Totals } from "./totals.js";

export type TransactionDetailsTaxRatesUsedItem = {
  /** Rate used to calculate tax for this transaction. */
  taxRate: string;
  /** Calculated totals for the tax applied to this transaction. */
  totals: Totals;
};

export const transactionDetailsTaxRatesUsedItemSchema: Schema<TransactionDetailsTaxRatesUsedItem> =
  s.object<TransactionDetailsTaxRatesUsedItem>({
    taxRate: s.string(),
    totals: totalsSchema,
    _keysMap: {
      taxRate: "tax_rate",
    },
  });
