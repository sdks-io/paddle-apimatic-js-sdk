import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Return entities that match the specified status. Use a comma-separated list to specify multiple
 * status values.
 */
export const AdjustmentStatusQuery = {
  /**
   * "pending_approval": { "description": "Return adjustments where the status is
   * `pending_approval`. Returned adjustments are refunds that are pending approval by Paddle." }
   */
  PendingApproval: "pending_approval",
  /**
   * "approved": { "description": "Return adjustments where the status is `approved`. Returned
   * adjustments are credits or refunds that have been approved by Paddle." }
   */
  Approved: "approved",
  /**
   * "rejected": { "description": "Return adjustments where the status is `rejected`. Returned
   * adjustments are rejected refunds." }
   */
  Rejected: "rejected",
  /** "reversed": { "description": "Return adjustments where the status is `reversed`." } */
  Reversed: "reversed",
} as const;
export type AdjustmentStatusQuery =
  | (typeof AdjustmentStatusQuery)[keyof typeof AdjustmentStatusQuery]
  | (string & {});

export const adjustmentStatusQuerySchema: EnumSchema<AdjustmentStatusQuery> =
  s.enumOf<AdjustmentStatusQuery>(AdjustmentStatusQuery);
