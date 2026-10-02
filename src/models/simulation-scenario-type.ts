import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Scenario for a simulation. */
export const SimulationScenarioType = {
  /**
   * "subscription_creation": { "description": "Simulates all events sent when a subscription is
   * created." }
   */
  SubscriptionCreation: "subscription_creation",
  /**
   * "subscription_renewal": { "description": "Simulates all events sent when a subscription is
   * renewed." }
   */
  SubscriptionRenewal: "subscription_renewal",
  /**
   * "subscription_pause": { "description": "Simulates all events sent when a subscription is
   * paused." }
   */
  SubscriptionPause: "subscription_pause",
  /**
   * "subscription_resume": { "description": "Simulates all events sent when a subscription is
   * resumed." }
   */
  SubscriptionResume: "subscription_resume",
  /**
   * "subscription_cancellation": { "description": "Simulates all events sent when a subscription is
   * canceled." }
   */
  SubscriptionCancellation: "subscription_cancellation",
} as const;
export type SimulationScenarioType =
  | (typeof SimulationScenarioType)[keyof typeof SimulationScenarioType]
  | (string & {});

export const simulationScenarioTypeSchema: EnumSchema<SimulationScenarioType> =
  s.enumOf<SimulationScenarioType>(SimulationScenarioType);
