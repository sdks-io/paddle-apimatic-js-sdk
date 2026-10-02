import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs,
  simulationConfigSubscriptionCreationOptionsBusinessSimulatedAsSchema,
} from "./simulation-config-subscription-creation-options-business-simulated-as.js";
import {
  SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs,
  simulationConfigSubscriptionCreationOptionsCustomerSimulatedAsSchema,
} from "./simulation-config-subscription-creation-options-customer-simulated-as.js";
import {
  SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs,
  simulationConfigSubscriptionCreationOptionsDiscountSimulatedAsSchema,
} from "./simulation-config-subscription-creation-options-discount-simulated-as.js";

/** Options to configure subscription creation simulations. */
export type SimulationSubscriptionCreationConfigOptionsCreate = {
  /**
   * Determines which webhooks are sent based on whether a new or existing customer subscribes, and
   * how their details are entered if they're an existing customer. If omitted, defaults to `new`.
   *
   * @default SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs.New
   */
  customerSimulatedAs?: SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs;
  /**
   * Determines which webhooks are sent based on whether a new, existing, or no business was
   * provided. If omitted, defaults to `not_provided`.
   *
   * @default SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs.NotProvided
   */
  businessSimulatedAs?: SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs;
  /**
   * Determines which webhooks are sent based on whether a discount is used and how it's entered. If
   * omitted, defaults to `not_provided`.
   *
   * @default SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs.NotProvided
   */
  discountSimulatedAs?: SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs;
};

export const simulationSubscriptionCreationConfigOptionsCreateSchema: Schema<SimulationSubscriptionCreationConfigOptionsCreate> =
  s.object<SimulationSubscriptionCreationConfigOptionsCreate>({
    customerSimulatedAs: s.defaulted(
      simulationConfigSubscriptionCreationOptionsCustomerSimulatedAsSchema,
      SimulationConfigSubscriptionCreationOptionsCustomerSimulatedAs.New,
    ),
    businessSimulatedAs: s.defaulted(
      simulationConfigSubscriptionCreationOptionsBusinessSimulatedAsSchema,
      SimulationConfigSubscriptionCreationOptionsBusinessSimulatedAs.NotProvided,
    ),
    discountSimulatedAs: s.defaulted(
      simulationConfigSubscriptionCreationOptionsDiscountSimulatedAsSchema,
      SimulationConfigSubscriptionCreationOptionsDiscountSimulatedAs.NotProvided,
    ),
    _keysMap: {
      customerSimulatedAs: "customer_simulated_as",
      businessSimulatedAs: "business_simulated_as",
      discountSimulatedAs: "discount_simulated_as",
    },
  });
