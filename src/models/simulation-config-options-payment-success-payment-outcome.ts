import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentSuccessPaymentOutcome = {
  /**
   * "success": { "description": "Simulates as if the payment for the subscription is successful." }
   */
  Success: "success",
} as const;
export type SimulationConfigOptionsPaymentSuccessPaymentOutcome =
  | (typeof SimulationConfigOptionsPaymentSuccessPaymentOutcome)[keyof typeof SimulationConfigOptionsPaymentSuccessPaymentOutcome]
  | (string & {});

export const simulationConfigOptionsPaymentSuccessPaymentOutcomeSchema: EnumSchema<SimulationConfigOptionsPaymentSuccessPaymentOutcome> =
  s.enumOf<SimulationConfigOptionsPaymentSuccessPaymentOutcome>(
    SimulationConfigOptionsPaymentSuccessPaymentOutcome,
  );
