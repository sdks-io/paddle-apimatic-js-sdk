import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { transactionPreviewSchema, type TransactionPreview } from "./transaction-preview.js";

export type TransactionsPreviewResponse = {
  /** Represents a transaction entity when previewing transactions. */
  data: TransactionPreview;
  /** Information about this response. */
  meta: Meta;
};

export const transactionsPreviewResponseSchema: Schema<TransactionsPreviewResponse> =
  s.object<TransactionsPreviewResponse>({
    data: transactionPreviewSchema,
    meta: metaSchema,
  });
