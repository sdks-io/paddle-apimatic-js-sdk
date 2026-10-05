import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentItemTotals1Schema, type AdjustmentItemTotals1 } from "./adjustment-item-totals1.js";
import { adjustmentItemTypeSchema, type AdjustmentItemType } from "./adjustment-item-type.js";
import { proration1Schema, type Proration1 } from "./proration1.js";

export type Item1 = {
  /** Unique Paddle ID for this adjustment item, prefixed with `adjitm_`. */
  id: string;
  /**
   * Paddle ID for the transaction item that this adjustment item relates to, prefixed with
   * `txnitm_`.
   */
  itemId: string;
  /**
   * Type of adjustment for this transaction item. `tax` adjustments are automatically created by
   * Paddle. Include `amount` when creating a `partial` adjustment.
   */
  type: AdjustmentItemType;
  /** Amount adjusted for this transaction item. Required when item `type` is `partial`. */
  amount: string | null;
  /** How proration was calculated for this adjustment item. */
  proration: Proration1 | null;
  /** Breakdown of the total for an adjustment item. */
  totals: AdjustmentItemTotals1;
};

export const item1Schema: Schema<Item1> = s.object<Item1>({
  id: s.string(),
  itemId: s.string(),
  type: adjustmentItemTypeSchema,
  amount: s.nullable(s.string()),
  proration: s.nullable(s.lazy(() => proration1Schema)),
  totals: adjustmentItemTotals1Schema,
  _keysMap: {
    itemId: "item_id",
  },
});
