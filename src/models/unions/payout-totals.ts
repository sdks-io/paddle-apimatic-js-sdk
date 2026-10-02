import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutTotalsAdjustmentSchema, type PayoutTotalsAdjustment } from "../payout-totals-adjustment.js";

/** Breakdown of how this adjustment affects your payout balance. */
export type PayoutTotals = PayoutTotalsAdjustment;

export const payoutTotalsSchema: Schema<PayoutTotals> = s.of<PayoutTotals>(
  s.union([s.lazy(() => payoutTotalsAdjustmentSchema)]),
);
