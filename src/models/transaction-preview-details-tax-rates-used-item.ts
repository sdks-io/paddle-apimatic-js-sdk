import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalsSchema, type Totals } from "./totals.js";

export type TransactionPreviewDetailsTaxRatesUsedItem = {
  /** Rate used to calculate tax for this transaction preview. */
  taxRate: string;
  /** Calculated totals for the tax applied to this transaction preview. */
  totals: Totals;
};

export const transactionPreviewDetailsTaxRatesUsedItemSchema: Schema<TransactionPreviewDetailsTaxRatesUsedItem> =
  s.object<TransactionPreviewDetailsTaxRatesUsedItem>({
    taxRate: s.string(),
    totals: totalsSchema,
    _keysMap: {
      taxRate: "tax_rate",
    },
  });
