import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs = {
  /** "not_provided": { "description": "Simulates as if no business is provided." } */
  NotProvided: "not_provided",
  /**
   * "new": { "description": "Simulates as if a customer enters their business details at checkout
   * and Paddle creates a new business." }
   */
  New: "new",
  /**
   * "existing_details_prefilled": { "description": "Simulates as if an existing business is
   * prefilled at checkout by passing it to Paddle.js." }
   */
  ExistingDetailsPrefilled: "existing_details_prefilled",
} as const;
export type SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs =
  | (typeof SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs)[keyof typeof SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs]
  | (string & {});

export const simulationConfigSubscriptionCreationOptionsBusinessSimulatedAsSchema: EnumSchema<SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs> =
  s.enumOf<SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs>(
    SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs,
  );
