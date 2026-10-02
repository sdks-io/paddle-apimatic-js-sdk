import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Approval status of this checkout domain. Checkout domains are created as `pending_review`. It can
 * be `pending_review`, `approved`, `rejected`, `in_review`, or `action_required`.
 */
export const CheckoutDomainApprovalStatus = {
  /**
   * "pending_review": { "description": "Domain is newly added and is pending review.", "readOnly":
   * true }
   */
  PendingReview: "pending_review",
  /**
   * "approved": { "description": "Domain has been approved and can be used for checkouts.",
   * "readOnly": true }
   */
  Approved: "approved",
  /**
   * "rejected": { "description": "Domain has been rejected and cannot be used for checkouts.",
   * "readOnly": true }
   */
  Rejected: "rejected",
  /**
   * "in_review": { "description": "Domain is currently under review by Paddle.", "readOnly": true }
   */
  InReview: "in_review",
  /**
   * "action_required": { "description": "Domain was soft-declined during review. The seller can
   * resolve the issue and resubmit the domain.", "readOnly": true }
   */
  ActionRequired: "action_required",
} as const;
export type CheckoutDomainApprovalStatus =
  | (typeof CheckoutDomainApprovalStatus)[keyof typeof CheckoutDomainApprovalStatus]
  | (string & {});

export const checkoutDomainApprovalStatusSchema: EnumSchema<CheckoutDomainApprovalStatus> =
  s.enumOf<CheckoutDomainApprovalStatus>(CheckoutDomainApprovalStatus);
