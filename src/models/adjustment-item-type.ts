import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of adjustment for this transaction item. `tax` adjustments are automatically created by
 * Paddle. Include `amount` when creating a `partial` adjustment.
 */
export const AdjustmentItemType = {
  /** "full": { "description": "Full total for this transaction item is adjusted." } */
  Full: "full",
  /**
   * "partial": { "description": "Part of this transaction item is adjusted. Include `amount` to
   * specify the partial amount adjusted." }
   */
  Partial: "partial",
  /**
   * "tax": { "description": "Tax for this transaction item is adjusted. Created automatically by
   * Paddle.", "readOnly": true }
   */
  Tax: "tax",
  /**
   * "proration": { "description": "A prorated amount for this transaction item is adjusted. Created
   * automatically by Paddle in some cases when making changes to a subscription.", "deprecated":
   * true, "readOnly": true }
   */
  Proration: "proration",
} as const;
export type AdjustmentItemType = (typeof AdjustmentItemType)[keyof typeof AdjustmentItemType] | (string & {});

export const adjustmentItemTypeSchema: EnumSchema<AdjustmentItemType> =
  s.enumOf<AdjustmentItemType>(AdjustmentItemType);
