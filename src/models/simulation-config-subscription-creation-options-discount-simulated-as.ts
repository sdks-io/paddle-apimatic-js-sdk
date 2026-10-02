import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs = {
  /** "not_provided": { "description": "Simulates as if no discount is entered." } */
  NotProvided: "not_provided",
  /**
   * "prefilled": { "description": "Simulates as if a discount is prefilled at checkout by passing
   * it to Paddle.js. Requires `entities.discount_id`." }
   */
  Prefilled: "prefilled",
  /**
   * "entered_by_customer": { "description": "Simulates as if a customer entered a discount at
   * checkout. Requires `entities.discount_id`." }
   */
  EnteredByCustomer: "entered_by_customer",
} as const;
export type SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs =
  | (typeof SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs)[keyof typeof SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs]
  | (string & {});

export const simulationConfigSubscriptionCreationOptionsDiscountSimulatedAsSchema: EnumSchema<SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs> =
  s.enumOf<SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs>(
    SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs,
  );
