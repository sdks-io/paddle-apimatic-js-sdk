import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of this adjustment. Set automatically by Paddle.
 *
 * Most refunds for live accounts are created with the status of `pending_approval` until reviewed
 * by Paddle, but some are automatically approved. For sandbox accounts, Paddle automatically
 * approves refunds every ten minutes.
 *
 * Credit adjustments don't require approval from Paddle, so they're created as `approved`.
 */
export const AdjustmentStatus = {
  /**
   * "pending_approval": { "description": "Adjustment is pending approval by Paddle. Most refunds
   * for live accounts must be approved by Paddle." }
   */
  PendingApproval: "pending_approval",
  /**
   * "approved": { "description": "Adjustment is approved. Default for credits. Set when Paddle
   * approves a refund that was `pending_approval`." }
   */
  Approved: "approved",
  /**
   * "rejected": { "description": "Adjustment has been rejected. Set when Paddle rejects a refund
   * that was `pending_approval`." }
   */
  Rejected: "rejected",
  /**
   * "reversed": { "description": "Adjustment has been reversed. Set by Paddle when a
   * `chargeback_reversal` or `credit_reversal` adjustment is created for this adjustment." }
   */
  Reversed: "reversed",
} as const;
export type AdjustmentStatus = (typeof AdjustmentStatus)[keyof typeof AdjustmentStatus] | (string & {});

export const adjustmentStatusSchema: EnumSchema<AdjustmentStatus> =
  s.enumOf<AdjustmentStatus>(AdjustmentStatus);
