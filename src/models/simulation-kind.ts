import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of simulation. */
export const SimulationKind = {
  /** "single_event": { "description": "Paddle simulates a single event." } */
  SingleEvent: "single_event",
  /**
   * "scenario": { "description": "Paddle simulates a predefined series of events for a scenario,
   * like all events created when a subscription renews." }
   */
  Scenario: "scenario",
} as const;
export type SimulationKind = (typeof SimulationKind)[keyof typeof SimulationKind] | (string & {});

export const simulationKindSchema: EnumSchema<SimulationKind> = s.enumOf<SimulationKind>(SimulationKind);
