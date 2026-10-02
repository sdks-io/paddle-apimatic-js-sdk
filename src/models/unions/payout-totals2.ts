import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutTotalsAdjustment1Schema, type PayoutTotalsAdjustment1 } from "../payout-totals-adjustment1.js";

export type PayoutTotals2 = PayoutTotalsAdjustment1;

export const payoutTotals2Schema: Schema<PayoutTotals2> = s.of<PayoutTotals2>(
  s.union([s.lazy(() => payoutTotalsAdjustment1Schema)]),
);
