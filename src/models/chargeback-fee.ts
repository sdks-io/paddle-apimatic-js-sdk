import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { original1Schema, type Original1 } from "./unions/original1.js";

/**
 * Chargeback fees incurred for this adjustment. Only returned when the adjustment `action` is
 * `chargeback` or `chargeback_warning`.
 */
export type ChargebackFee = {
  /** Chargeback fee converted into the payout currency. */
  amount: string;
  /**
   * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
   * same as the payout currency.
   */
  original: Original1;
};

export const chargebackFeeSchema: Schema<ChargebackFee> = s.object<ChargebackFee>({
  amount: s.string(),
  original: original1Schema,
});
