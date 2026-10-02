import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How this adjustment impacts the related transaction. */
export const AdjustmentAction = {
  /** "credit": { "description": "Credits some or all the related transaction." } */
  Credit: "credit",
  /**
   * "refund": { "description": "Refunds some or all the related transaction. Must be approved by
   * Paddle in most cases." }
   */
  Refund: "refund",
  /**
   * "chargeback": { "description": "Chargeback for the related transaction. Automatically created
   * by Paddle when a customer successfully disputes a charge.", "readOnly": true }
   */
  Chargeback: "chargeback",
  /**
   * "chargeback_reverse": { "description": "Reversal of a chargeback for the related transaction.
   * Automatically created by Paddle when Paddle contests a chargeback successfully.", "readOnly":
   * true }
   */
  ChargebackReverse: "chargeback_reverse",
  /**
   * "chargeback_warning": { "description": "Warning of an upcoming chargeback for the related
   * transaction. Automatically created by Paddle.", "readOnly": true }
   */
  ChargebackWarning: "chargeback_warning",
  /**
   * "chargeback_warning_reverse": { "description": "Reversal of a chargeback warning for the
   * related transaction. Automatically created by Paddle.", "readOnly": true }
   */
  ChargebackWarningReverse: "chargeback_warning_reverse",
  /**
   * "credit_reverse": { "description": "Reversal of a credit for the related transaction.
   * Automatically created by Paddle.", "readOnly": true }
   */
  CreditReverse: "credit_reverse",
} as const;
export type AdjustmentAction = (typeof AdjustmentAction)[keyof typeof AdjustmentAction] | (string & {});

export const adjustmentActionSchema: EnumSchema<AdjustmentAction> =
  s.enumOf<AdjustmentAction>(AdjustmentAction);
