import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How this adjustment impacts the related transaction. */
export const AdjustmentActionQuery = {
  /**
   * "credit": { "description": "Return adjustments where the action is `credit`. Returned
   * adjustments are credits for some or all the related transaction." }
   */
  Credit: "credit",
  /**
   * "refund": { "description": "Return adjustments where the action is `refund`. Returned
   * adjustments are refunds for some or all the related transaction." }
   */
  Refund: "refund",
  /**
   * "chargeback": { "description": "Return adjustments where the action is `chargeback`. Returned
   * adjustments are chargebacks for their related transactions." }
   */
  Chargeback: "chargeback",
  /**
   * "chargeback_reverse": { "description": "Return adjustments where the action is
   * `chargeback_reverse`." }
   */
  ChargebackReverse: "chargeback_reverse",
  /**
   * "chargeback_warning": { "description": "Return adjustments where the action is
   * `chargeback_warning`. Returned adjustments are warnings of upcoming chargebacks for their
   * related transactions." }
   */
  ChargebackWarning: "chargeback_warning",
  /**
   * "chargeback_warning_reverse": { "description": "Return adjustments where the action is
   * `chargeback_warning_reverse`. Returned adjustments are reversals of chargeback warnings for
   * their related transactions." }
   */
  ChargebackWarningReverse: "chargeback_warning_reverse",
  /**
   * "credit_reverse": { "description": "Return adjustments where the action is `credit_reverse`." }
   */
  CreditReverse: "credit_reverse",
} as const;
export type AdjustmentActionQuery =
  | (typeof AdjustmentActionQuery)[keyof typeof AdjustmentActionQuery]
  | (string & {});

export const adjustmentActionQuerySchema: EnumSchema<AdjustmentActionQuery> =
  s.enumOf<AdjustmentActionQuery>(AdjustmentActionQuery);
