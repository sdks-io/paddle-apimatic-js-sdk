import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigSubscriptionCancellationOptionsEffectiveFrom = {
  /**
   * "next_billing_period": { "description": "Simulates as if the subscription cancels at the start
   * of next billing period." }
   */
  NextBillingPeriod: "next_billing_period",
  /** "immediately": { "description": "Simulates as if the subscription cancels immediately." } */
  Immediately: "immediately",
} as const;
export type SimulationConfigSubscriptionCancellationOptionsEffectiveFrom =
  | (typeof SimulationConfigSubscriptionCancellationOptionsEffectiveFrom)[keyof typeof SimulationConfigSubscriptionCancellationOptionsEffectiveFrom]
  | (string & {});

export const simulationConfigSubscriptionCancellationOptionsEffectiveFromSchema: EnumSchema<SimulationConfigSubscriptionCancellationOptionsEffectiveFrom> =
  s.enumOf<SimulationConfigSubscriptionCancellationOptionsEffectiveFrom>(
    SimulationConfigSubscriptionCancellationOptionsEffectiveFrom,
  );
