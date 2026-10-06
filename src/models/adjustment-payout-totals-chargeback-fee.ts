import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustmentPayoutTotalsChargebackFeeOriginalSchema,
  type AdjustmentPayoutTotalsChargebackFeeOriginal,
} from "./adjustment-payout-totals-chargeback-fee-original.js";

export type AdjustmentPayoutTotalsChargebackFee = {
  /** Chargeback fee converted into the payout currency. */
  amount: string;
  /**
   * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
   * same as the payout currency.
   */
  original?: AdjustmentPayoutTotalsChargebackFeeOriginal | null;
};

export const adjustmentPayoutTotalsChargebackFeeSchema: Schema<AdjustmentPayoutTotalsChargebackFee> =
  s.object<AdjustmentPayoutTotalsChargebackFee>({
    amount: s.string(),
    original: s.optionalNullable(s.lazy(() => adjustmentPayoutTotalsChargebackFeeOriginalSchema)),
  });
