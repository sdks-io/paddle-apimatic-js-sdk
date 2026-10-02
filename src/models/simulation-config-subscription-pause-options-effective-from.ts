import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigSubscriptionPauseOptionsEffectiveFrom = {
  /**
   * "next_billing_period": { "description": "Simulates as if the subscription pauses at the start
   * of next billing period." }
   */
  NextBillingPeriod: "next_billing_period",
  /** "immediately": { "description": "Simulates as if the subscription pauses immediately." } */
  Immediately: "immediately",
} as const;
export type SimulationConfigSubscriptionPauseOptionsEffectiveFrom =
  | (typeof SimulationConfigSubscriptionPauseOptionsEffectiveFrom)[keyof typeof SimulationConfigSubscriptionPauseOptionsEffectiveFrom]
  | (string & {});

export const simulationConfigSubscriptionPauseOptionsEffectiveFromSchema: EnumSchema<SimulationConfigSubscriptionPauseOptionsEffectiveFrom> =
  s.enumOf<SimulationConfigSubscriptionPauseOptionsEffectiveFrom>(
    SimulationConfigSubscriptionPauseOptionsEffectiveFrom,
  );
