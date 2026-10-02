import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nextTransactionSchema, type NextTransaction } from "../next-transaction.js";

/**
 * Preview of the immediate transaction created as a result of changes to the subscription. Returns
 * a complete object where `proration_billing_mode` is `prorated_immediately` or `full_immediately`;
 * `null` otherwise.
 */
export type ImmediateTransaction = NextTransaction;

export const immediateTransactionSchema: Schema<ImmediateTransaction> = s.of<ImmediateTransaction>(
  s.union([s.lazy(() => nextTransactionSchema)]),
);
