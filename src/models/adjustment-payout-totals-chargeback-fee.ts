import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { original1Schema, type Original1 } from "./unions/original1.js";

export type AdjustmentPayoutTotalsChargebackFee = {
  /** Chargeback fee converted into the payout currency. */
  amount: string;
  /**
   * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
   * same as the payout currency.
   */
  original: Original1;
};

export const adjustmentPayoutTotalsChargebackFeeSchema: Schema<AdjustmentPayoutTotalsChargebackFee> =
  s.object<AdjustmentPayoutTotalsChargebackFee>({
    amount: s.string(),
    original: original1Schema,
  });
