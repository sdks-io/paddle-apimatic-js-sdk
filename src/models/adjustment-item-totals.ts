import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Breakdown of the total for an adjustment item. */
export type AdjustmentItemTotals = {
  /** Amount multiplied by quantity. */
  subtotal: string;
  /** Total tax on the subtotal. */
  tax: string;
  /** Total after tax. */
  total: string;
};

export const adjustmentItemTotalsSchema: Schema<AdjustmentItemTotals> = s.object<AdjustmentItemTotals>({
  subtotal: s.string(),
  tax: s.string(),
  total: s.string(),
});
