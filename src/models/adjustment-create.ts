import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentActionSchema, type AdjustmentAction } from "./adjustment-action.js";
import { adjustmentItemCreateSchema, type AdjustmentItemCreate } from "./adjustment-item-create.js";
import { adjustmentTaxModeSchema, type AdjustmentTaxMode } from "./adjustment-tax-mode.js";
import { adjustmentTypeSchema, type AdjustmentType } from "./adjustment-type.js";

/** Represents an adjustment entity when creating adjustments. */
export type AdjustmentCreate = {
  /** How this adjustment impacts the related transaction. */
  action: AdjustmentAction;
  type?: AdjustmentType;
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
  items?: AdjustmentItemCreate[] | null;
};

export const adjustmentCreateSchema: Schema<AdjustmentCreate> = s.object<AdjustmentCreate>({
  action: adjustmentActionSchema,
  type: s.optional(s.lazy(() => adjustmentTypeSchema)),
  taxMode: s.optional(s.lazy(() => adjustmentTaxModeSchema)),
  transactionId: s.string(),
  reason: s.string(),
  items: s.optionalNullable(s.array(s.lazy(() => adjustmentItemCreateSchema))),
  _keysMap: {
    taxMode: "tax_mode",
    transactionId: "transaction_id",
  },
});
