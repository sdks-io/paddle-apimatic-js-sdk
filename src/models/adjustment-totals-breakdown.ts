import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Breakdown of the total adjustments by adjustment action. */
export type AdjustmentTotalsBreakdown = {
  /** Total amount of credit adjustments. */
  credit: string;
  /** Total amount of refund adjustments. */
  refund: string;
  /** Total amount of chargeback adjustments. */
  chargeback: string;
};

export const adjustmentTotalsBreakdownSchema: Schema<AdjustmentTotalsBreakdown> =
  s.object<AdjustmentTotalsBreakdown>({
    credit: s.string(),
    refund: s.string(),
    chargeback: s.string(),
  });
