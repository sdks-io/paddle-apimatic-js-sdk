import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Revised customer information for this transaction. */
export type TransactionRevisionCustomer = {
  /** Revised name of the customer for this transaction. */
  name?: string;
};

export const transactionRevisionCustomerSchema: Schema<TransactionRevisionCustomer> =
  s.object<TransactionRevisionCustomer>({
    name: s.optional(s.string()),
  });
