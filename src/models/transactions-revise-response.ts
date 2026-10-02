import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type TransactionsReviseResponse = {
  /** Represents a transaction entity. */
  data: Transaction;
  /** Information about this response. */
  meta: Meta;
};

export const transactionsReviseResponseSchema: Schema<TransactionsReviseResponse> =
  s.object<TransactionsReviseResponse>({
    data: transactionSchema,
    meta: metaSchema,
  });
