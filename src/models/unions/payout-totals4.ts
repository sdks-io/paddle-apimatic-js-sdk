import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPayoutTotals1Schema,
  type TransactionPayoutTotals1,
} from "../transaction-payout-totals1.js";

/**
 * Breakdown of the payout total for a transaction. `null` until the transaction is `completed`.
 * Returned in your payout currency.
 */
export type PayoutTotals4 = TransactionPayoutTotals1;

export const payoutTotals4Schema: Schema<PayoutTotals4> = s.of<PayoutTotals4>(
  s.union([s.lazy(() => transactionPayoutTotals1Schema)]),
);
