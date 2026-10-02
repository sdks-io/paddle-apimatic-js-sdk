import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { transactionWithIncludesSchema, type TransactionWithIncludes } from "./transaction-with-includes.js";

export type TransactionsResponse1 = {
  /** Represents a transaction entity with included entities. */
  data: TransactionWithIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const transactionsResponse1Schema: Schema<TransactionsResponse1> = s.object<TransactionsResponse1>({
  data: transactionWithIncludesSchema,
  meta: metaSchema,
});
