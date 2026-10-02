import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionPayoutTotalsAdjustedSchema,
  type TransactionPayoutTotalsAdjusted,
} from "../transaction-payout-totals-adjusted.js";

/**
 * Breakdown of the payout total for a transaction after adjustments. `null` until the transaction
 * is `completed`.
 */
export type AdjustedPayoutTotals = TransactionPayoutTotalsAdjusted;

export const adjustedPayoutTotalsSchema: Schema<AdjustedPayoutTotals> = s.of<AdjustedPayoutTotals>(
  s.union([s.lazy(() => transactionPayoutTotalsAdjustedSchema)]),
);
