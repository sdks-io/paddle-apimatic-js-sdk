import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { original2Schema, type Original2 } from "./original2.js";

/** Details of any chargeback fees incurred for this transaction. */
export type ChargebackFee2 = {
  /** Chargeback fee converted into the payout currency. */
  amount: string;
  /**
   * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
   * same as the payout currency.
   */
  original: Original2 | null;
};

export const chargebackFee2Schema: Schema<ChargebackFee2> = s.object<ChargebackFee2>({
  amount: s.string(),
  original: s.nullable(s.lazy(() => original2Schema)),
});
