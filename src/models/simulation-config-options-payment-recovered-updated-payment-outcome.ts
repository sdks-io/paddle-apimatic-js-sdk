import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome = {
  /**
   * "recovered_updated_payment_method": { "description": "Simulates as if the payment for the
   * subscription fails initially and the customer updates their payment method to successfully
   * pay." }
   */
  RecoveredUpdatedPaymentMethod: "recovered_updated_payment_method",
} as const;
export type SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome =
  | (typeof SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome)[keyof typeof SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome]
  | (string & {});

export const simulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcomeSchema: EnumSchema<SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome> =
  s.enumOf<SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome>(
    SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome,
  );
