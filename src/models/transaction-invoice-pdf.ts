import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionInvoicePdf = {
  /** URL of the requested resource. */
  url: string;
};

export const transactionInvoicePdfSchema: Schema<TransactionInvoicePdf> = s.object<TransactionInvoicePdf>({
  url: s.string(),
});
