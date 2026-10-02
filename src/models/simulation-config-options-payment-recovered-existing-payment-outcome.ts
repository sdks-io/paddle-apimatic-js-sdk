import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome = {
  /**
   * "recovered_existing_payment_method": { "description": "Simulates as if the payment for the
   * subscription fails initially and the payment is recovered when retrying the existing payment
   * method." }
   */
  RecoveredExistingPaymentMethod: "recovered_existing_payment_method",
} as const;
export type SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome =
  | (typeof SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome)[keyof typeof SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome]
  | (string & {});

export const simulationConfigOptionsPaymentRecoveredExistingPaymentOutcomeSchema: EnumSchema<SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome> =
  s.enumOf<SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome>(
    SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome,
  );
