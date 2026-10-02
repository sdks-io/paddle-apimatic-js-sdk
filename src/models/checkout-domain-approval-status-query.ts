import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status filter for listing checkout domains. */
export const CheckoutDomainApprovalStatusQuery = {
  /**
   * "pending_review": { "description": "Return the checkout domains that are newly added and
   * pending review." }
   */
  PendingReview: "pending_review",
  /**
   * "approved": { "description": "Return the checkout domains that have been approved and can be
   * used for checkouts." }
   */
  Approved: "approved",
  /**
   * "rejected": { "description": "Return the checkout domains that have been rejected and cannot be
   * used for checkouts." }
   */
  Rejected: "rejected",
  /**
   * "in_review": { "description": "Return the checkout domains that are currently under review by
   * Paddle." }
   */
  InReview: "in_review",
  /**
   * "action_required": { "description": "Return the checkout domains that were soft-declined and
   * can be resubmitted by the seller." }
   */
  ActionRequired: "action_required",
} as const;
export type CheckoutDomainApprovalStatusQuery =
  | (typeof CheckoutDomainApprovalStatusQuery)[keyof typeof CheckoutDomainApprovalStatusQuery]
  | (string & {});

export const checkoutDomainApprovalStatusQuerySchema: EnumSchema<CheckoutDomainApprovalStatusQuery> =
  s.enumOf<CheckoutDomainApprovalStatusQuery>(CheckoutDomainApprovalStatusQuery);
