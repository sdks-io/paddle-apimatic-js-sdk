import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentItemTotals1Schema, type AdjustmentItemTotals1 } from "./adjustment-item-totals1.js";
import { adjustmentItemTypeSchema, type AdjustmentItemType } from "./adjustment-item-type.js";
import { amountSchema, type Amount } from "./unions/amount.js";
import { proration11Schema, type Proration11 } from "./unions/proration11.js";

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
  amount: Amount;
  /** How proration was calculated for this adjustment item. */
  proration: Proration11;
  /** Breakdown of the total for an adjustment item. */
  totals: AdjustmentItemTotals1;
};

export const item1Schema: Schema<Item1> = s.object<Item1>({
  id: s.string(),
  itemId: s.string(),
  type: adjustmentItemTypeSchema,
  amount: amountSchema,
  proration: proration11Schema,
  totals: adjustmentItemTotals1Schema,
  _keysMap: {
    itemId: "item_id",
  },
});
