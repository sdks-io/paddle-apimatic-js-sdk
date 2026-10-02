import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionPayoutTotalsSchema, type TransactionPayoutTotals } from "../transaction-payout-totals.js";

/**
 * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`.
 * Returned in your payout currency.
 */
export type PayoutTotals1 = TransactionPayoutTotals;

export const payoutTotals1Schema: Schema<PayoutTotals1> = s.of<PayoutTotals1>(
  s.union([s.lazy(() => transactionPayoutTotalsSchema)]),
);
