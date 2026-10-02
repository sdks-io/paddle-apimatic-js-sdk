import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status for an adjustment. Pending approval is read-only and cannot be set. Approved and Rejected
 * are both final states for an adjustment.
 */
export const Status7 = {
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
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
