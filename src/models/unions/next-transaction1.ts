import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nextTransactionSchema, type NextTransaction } from "../next-transaction.js";

/**
 * Preview of the next transaction for this subscription. May include prorated charges that aren't
 * yet billed and one-time charges. Returned when the `include` parameter is used with the
 * `next_transaction` value. `null` if the subscription is scheduled to cancel or pause.
 */
export type NextTransaction1 = NextTransaction;

export const nextTransaction1Schema: Schema<NextTransaction1> = s.of<NextTransaction1>(
  s.union([s.lazy(() => nextTransactionSchema)]),
);
