import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentPaymentOutcome = {
  /**
   * "success": { "description": "Simulates as if the payment for the subscription is successful." }
   */
  Success: "success",
  /**
   * "recovered_existing_payment_method": { "description": "Simulates as if the payment for the
   * subscription fails initially and the payment is recovered when retrying the existing payment
   * method." }
   */
  RecoveredExistingPaymentMethod: "recovered_existing_payment_method",
  /**
   * "recovered_updated_payment_method": { "description": "Simulates as if the payment for the
   * subscription fails initially and the customer updates their payment method to successfully
   * pay." }
   */
  RecoveredUpdatedPaymentMethod: "recovered_updated_payment_method",
  /**
   * "failed": { "description": "Simulates as if the payment for the subscription is unsuccessful
   * after all payment recovery attempts are exhausted." }
   */
  Failed: "failed",
} as const;
export type SimulationConfigOptionsPaymentPaymentOutcome =
  | (typeof SimulationConfigOptionsPaymentPaymentOutcome)[keyof typeof SimulationConfigOptionsPaymentPaymentOutcome]
  | (string & {});

export const simulationConfigOptionsPaymentPaymentOutcomeSchema: EnumSchema<SimulationConfigOptionsPaymentPaymentOutcome> =
  s.enumOf<SimulationConfigOptionsPaymentPaymentOutcome>(SimulationConfigOptionsPaymentPaymentOutcome);
