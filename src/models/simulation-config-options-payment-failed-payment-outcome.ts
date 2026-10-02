import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentFailedPaymentOutcome = {
  /**
   * "failed": { "description": "Simulates as if the payment for the subscription is unsuccessful
   * after all payment recovery attempts are exhausted." }
   */
  Failed: "failed",
} as const;
export type SimulationConfigOptionsPaymentFailedPaymentOutcome =
  | (typeof SimulationConfigOptionsPaymentFailedPaymentOutcome)[keyof typeof SimulationConfigOptionsPaymentFailedPaymentOutcome]
  | (string & {});

export const simulationConfigOptionsPaymentFailedPaymentOutcomeSchema: EnumSchema<SimulationConfigOptionsPaymentFailedPaymentOutcome> =
  s.enumOf<SimulationConfigOptionsPaymentFailedPaymentOutcome>(
    SimulationConfigOptionsPaymentFailedPaymentOutcome,
  );
