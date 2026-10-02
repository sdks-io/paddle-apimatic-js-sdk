import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of adjustment. Use `full` to adjust the grand total for the related transaction. Include an
 * `items` array when creating a `partial` adjustment. If omitted, defaults to `partial`.
 */
export const AdjustmentType = {
  /** "full": { "description": "The grand total for the related transaction is adjusted." } */
  Full: "full",
  /**
   * "partial": { "description": "Some line items for the related transaction are adjusted. Requires
   * `items`." }
   */
  Partial: "partial",
} as const;
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType] | (string & {});

export const adjustmentTypeSchema: EnumSchema<AdjustmentType> = s.enumOf<AdjustmentType>(AdjustmentType);
