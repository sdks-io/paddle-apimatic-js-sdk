import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This parameter indicates the type of adjustment that will be created. Partial and full refunds
 * can be requested, but needs approval from Paddle. Tax refunds, chargeback and chargeback_warning
 * are reserved for Paddle internal users.
 */
export const AdjustmentAction1 = {
  /** "credit": { "description": "Credits some or all the related transaction." } */
  Credit: "credit",
  /**
   * "refund": { "description": "Refunds some or all the related transaction. Must be approved by
   * Paddle in most cases." }
   */
  Refund: "refund",
  /**
   * "chargeback": { "description": "Chargeback for the related transaction. Automatically created
   * by Paddle when a customer successfully disputes a charge." }
   */
  Chargeback: "chargeback",
  /**
   * "chargeback_reverse": { "description": "Reversal of a chargeback for the related transaction.
   * Automatically created by Paddle when Paddle contests a chargeback successfully." }
   */
  ChargebackReverse: "chargeback_reverse",
  /**
   * "chargeback_warning": { "description": "Warning of an upcoming chargeback for the related
   * transaction. Automatically created by Paddle." }
   */
  ChargebackWarning: "chargeback_warning",
  /**
   * "chargeback_warning_reverse": { "description": "Reversal of a chargeback warning for the
   * related transaction. Automatically created by Paddle." }
   */
  ChargebackWarningReverse: "chargeback_warning_reverse",
  /**
   * "credit_reverse": { "description": "Reversal of a credit for the related transaction.
   * Automatically created by Paddle." }
   */
  CreditReverse: "credit_reverse",
} as const;
export type AdjustmentAction1 = (typeof AdjustmentAction1)[keyof typeof AdjustmentAction1] | (string & {});

export const adjustmentAction1Schema: EnumSchema<AdjustmentAction1> =
  s.enumOf<AdjustmentAction1>(AdjustmentAction1);
