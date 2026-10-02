import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPayoutTotalsAdjusted1Schema,
  type TransactionPayoutTotalsAdjusted1,
} from "../transaction-payout-totals-adjusted1.js";

/**
 * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
 * is `completed`.
 */
export type AdjustedPayoutTotals1 = TransactionPayoutTotalsAdjusted1;

export const adjustedPayoutTotals1Schema: Schema<AdjustedPayoutTotals1> = s.of<AdjustedPayoutTotals1>(
  s.union([s.lazy(() => transactionPayoutTotalsAdjusted1Schema)]),
);
