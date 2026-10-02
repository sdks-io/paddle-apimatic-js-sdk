import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { transactionInvoicePdfSchema, type TransactionInvoicePdf } from "./transaction-invoice-pdf.js";

export type GetInvoicePdfResponse = {
  /** Information about this response. */
  meta: Meta;
  data: TransactionInvoicePdf;
};

export const getInvoicePdfResponseSchema: Schema<GetInvoicePdfResponse> = s.object<GetInvoicePdfResponse>({
  meta: metaSchema,
  data: transactionInvoicePdfSchema,
});
