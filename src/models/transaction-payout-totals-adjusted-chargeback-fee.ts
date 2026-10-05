import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionPayoutTotalsAdjustedChargebackFeeOriginalSchema,
  type TransactionPayoutTotalsAdjustedChargebackFeeOriginal,
} from "./transaction-payout-totals-adjusted-chargeback-fee-original.js";

/** Details of any chargeback fees incurred for this transaction. */
export type TransactionPayoutTotalsAdjustedChargebackFee = {
  /** Chargeback fee converted into the payout currency. */
  amount: string;
  /**
   * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
   * same as the payout currency.
   */
  original: TransactionPayoutTotalsAdjustedChargebackFeeOriginal | null;
};

export const transactionPayoutTotalsAdjustedChargebackFeeSchema: Schema<TransactionPayoutTotalsAdjustedChargebackFee> =
  s.object<TransactionPayoutTotalsAdjustedChargebackFee>({
    amount: s.string(),
    original: s.nullable(s.lazy(() => transactionPayoutTotalsAdjustedChargebackFeeOriginalSchema)),
  });
