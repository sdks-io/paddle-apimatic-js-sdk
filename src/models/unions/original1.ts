import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  adjustmentPayoutTotalsChargebackFeeOriginalSchema,
  type AdjustmentPayoutTotalsChargebackFeeOriginal,
} from "../adjustment-payout-totals-chargeback-fee-original.js";

/**
 * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
 * same as the payout currency.
 */
export type Original1 = AdjustmentPayoutTotalsChargebackFeeOriginal;

export const original1Schema: Schema<Original1> = s.of<Original1>(
  s.union([s.lazy(() => adjustmentPayoutTotalsChargebackFeeOriginalSchema)]),
);
