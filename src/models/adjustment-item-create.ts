import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentItemTypeSchema, type AdjustmentItemType } from "./adjustment-item-type.js";
import { amountSchema, type Amount } from "./unions/amount.js";

export type AdjustmentItemCreate = {
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
  amount?: Amount;
};

export const adjustmentItemCreateSchema: Schema<AdjustmentItemCreate> = s.object<AdjustmentItemCreate>({
  itemId: s.string(),
  type: adjustmentItemTypeSchema,
  amount: s.optional(s.lazy(() => amountSchema)),
  _keysMap: {
    itemId: "item_id",
  },
});
