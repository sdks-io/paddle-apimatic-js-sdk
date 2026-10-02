import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this payment attempt. */
export const PaymentAttemptStatus = {
  /**
   * "authorized": { "description": "Authorized but not captured. Payment attempt is incomplete." }
   */
  Authorized: "authorized",
  /**
   * "authorized_flagged": { "description": "Authorized but not captured because it has been flagged
   * as potentially fraudulent. Payment attempt is incomplete." }
   */
  AuthorizedFlagged: "authorized_flagged",
  /**
   * "canceled": { "description": "Previously authorized payment attempt has been canceled.
   * Typically when `authorized_flagged` payment attempts are rejected." }
   */
  Canceled: "canceled",
  /**
   * "captured": { "description": "Payment captured successfully. Payment attempt is complete." }
   */
  Captured: "captured",
  /**
   * "error": { "description": "Something went wrong and the payment attempt was unsuccessful. Check
   * the `error_code` for more information." }
   */
  Error: "error",
  /**
   * "action_required": { "description": "Customer must complete an action for this payment attempt
   * to proceed. Typically means that the payment attempt requires 3DS." }
   */
  ActionRequired: "action_required",
  /**
   * "pending_no_action_required": { "description": "Response required from the bank or payment
   * provider. Transaction is pending." }
   */
  PendingNoActionRequired: "pending_no_action_required",
  /** "created": { "description": "New payment attempt created." } */
  Created: "created",
  /** "unknown": { "description": "Payment attempt status not known." } */
  Unknown: "unknown",
  /** "dropped": { "description": "Payment attempt dropped by Paddle." } */
  Dropped: "dropped",
} as const;
export type PaymentAttemptStatus =
  | (typeof PaymentAttemptStatus)[keyof typeof PaymentAttemptStatus]
  | (string & {});

export const paymentAttemptStatusSchema: EnumSchema<PaymentAttemptStatus> =
  s.enumOf<PaymentAttemptStatus>(PaymentAttemptStatus);
