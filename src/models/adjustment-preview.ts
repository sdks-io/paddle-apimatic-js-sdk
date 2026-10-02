import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentItemSchema, type AdjustmentItem } from "./adjustment-item.js";
import { adjustmentTotalsSchema, type AdjustmentTotals } from "./adjustment-totals.js";

/** Represents an adjustment entity when previewing adjustments. */
export type AdjustmentPreview = {
  /**
   * Paddle ID for this transaction entity that this adjustment relates to, prefixed with `txn_`.
   */
  transactionId: string;
  /** List of transaction items that this adjustment is for. */
  items: AdjustmentItem[];
  /** Calculated totals for this adjustment. */
  totals: AdjustmentTotals;
};

export const adjustmentPreviewSchema: Schema<AdjustmentPreview> = s.object<AdjustmentPreview>({
  transactionId: s.string(),
  items: s.array(s.lazy(() => adjustmentItemSchema)),
  totals: adjustmentTotalsSchema,
  _keysMap: {
    transactionId: "transaction_id",
  },
});
