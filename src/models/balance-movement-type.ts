import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of balance movement to filter by. */
export const BalanceMovementType = {
  /**
   * "rebate": { "description": "A manual adjustment to your balance that isn't tied to a specific
   * transaction." }
   */
  Rebate: "rebate",
  /**
   * "swift_fee": { "description": "A SWIFT or wire-transfer fee deducted when your payout is made.
   * It isn't tied to a specific transaction." }
   */
  SwiftFee: "swift_fee",
  /**
   * "sale": { "description": "Your earnings from a paid transaction. This is the most common
   * balance movement." }
   */
  Sale: "sale",
  /**
   * "refund": { "description": "Refunds some or all the related transaction. Must be approved by
   * Paddle in most cases." }
   */
  Refund: "refund",
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
   * "chargeback": { "description": "Chargeback for the related transaction. Automatically created
   * by Paddle when a customer successfully disputes a charge." }
   */
  Chargeback: "chargeback",
  /**
   * "chargeback_reverse": { "description": "Reversal of a chargeback for the related transaction.
   * Automatically created by Paddle when Paddle contests a chargeback successfully." }
   */
  ChargebackReverse: "chargeback_reverse",
  /** "credit": { "description": "Credits some or all the related transaction." } */
  Credit: "credit",
} as const;
export type BalanceMovementType =
  | (typeof BalanceMovementType)[keyof typeof BalanceMovementType]
  | (string & {});

export const balanceMovementTypeSchema: EnumSchema<BalanceMovementType> =
  s.enumOf<BalanceMovementType>(BalanceMovementType);
