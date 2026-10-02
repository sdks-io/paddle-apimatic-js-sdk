import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentActionSchema, type AdjustmentAction } from "./adjustment-action.js";
import { AdjustmentTaxMode, adjustmentTaxModeSchema } from "./adjustment-tax-mode.js";
import { AdjustmentType, adjustmentTypeSchema } from "./adjustment-type.js";
import { itemsSchema, type Items } from "./unions/items.js";

/** Represents an adjustment entity when creating adjustments. */
export type AdjustmentCreate = {
  /** How this adjustment impacts the related transaction. */
  action: AdjustmentAction;
  /** @default AdjustmentType.Partial */
  type?: AdjustmentType;
  /** @default AdjustmentTaxMode.Internal */
  taxMode?: AdjustmentTaxMode;
  /**
   * Paddle ID of the transaction that this adjustment is for, prefixed with `txn_`.
   *
   * Automatically-collected transactions must be `completed`; manually-collected transactions must
   * have a status of `billed` or `past_due`
   *
   * You can't create an adjustment for a transaction that has a refund that's pending approval.
   */
  transactionId: string;
  /**
   * Why this adjustment was created. Appears in the Paddle dashboard. Retained for recordkeeping
   * purposes.
   */
  reason: string;
  /**
   * List of transaction items to adjust. Required if `type` is not populated or set to `partial`.
   */
  items?: Items;
};

export const adjustmentCreateSchema: Schema<AdjustmentCreate> = s.object<AdjustmentCreate>({
  action: adjustmentActionSchema,
  type: s.defaulted(adjustmentTypeSchema, AdjustmentType.Partial),
  taxMode: s.defaulted(adjustmentTaxModeSchema, AdjustmentTaxMode.Internal),
  transactionId: s.string(),
  reason: s.string(),
  items: s.optional(s.lazy(() => itemsSchema)),
  _keysMap: {
    taxMode: "tax_mode",
    transactionId: "transaction_id",
  },
});
