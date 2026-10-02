import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs = {
  /**
   * "new": { "description": "Simulates as if a new customer enters their details at checkout and
   * Paddle creates a new customer." }
   */
  New: "new",
  /**
   * "existing_email_matched": { "description": "Simulates as if an existing customer enters their
   * details at checkout. Paddle matches it to an existing customer based on the email supplied and
   * creates a new address for that customer." }
   */
  ExistingEmailMatched: "existing_email_matched",
  /**
   * "existing_details_prefilled": { "description": "Simulates as if existing customer details are
   * prefilled at checkout by passing them to Paddle.js." }
   */
  ExistingDetailsPrefilled: "existing_details_prefilled",
} as const;
export type SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs =
  | (typeof SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs)[keyof typeof SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs]
  | (string & {});

export const simulationConfigSubscriptionCreationOptionsCustomerSimulatedAsSchema: EnumSchema<SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs> =
  s.enumOf<SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs>(
    SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs,
  );
