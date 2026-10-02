import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { transactionWithIncludesSchema, type TransactionWithIncludes } from "./transaction-with-includes.js";

export type TransactionsResponse = {
  data: TransactionWithIncludes[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const transactionsResponseSchema: Schema<TransactionsResponse> = s.object<TransactionsResponse>({
  data: s.array(s.lazy(() => transactionWithIncludesSchema)),
  meta: paginatedMetaSchema,
});
