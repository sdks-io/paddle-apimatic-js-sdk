import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nextTransactionSchema, type NextTransaction } from "../next-transaction.js";

/**
 * Preview of the next transaction for this subscription. Includes charges created where
 * `proration_billing_mode` is `prorated_next_billing_period` or `full_next_billing_period`, as well
 * as one-time charges. `null` if the subscription is scheduled to cancel or pause.
 */
export type NextTransaction11 = NextTransaction;

export const nextTransaction11Schema: Schema<NextTransaction11> = s.of<NextTransaction11>(
  s.union([s.lazy(() => nextTransactionSchema)]),
);
