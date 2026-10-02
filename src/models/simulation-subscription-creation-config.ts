import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionCreationConfigEntitiesSchema,
  type SimulationSubscriptionCreationConfigEntities,
} from "./simulation-subscription-creation-config-entities.js";
import {
  simulationSubscriptionCreationConfigOptionsSchema,
  type SimulationSubscriptionCreationConfigOptions,
} from "./simulation-subscription-creation-config-options.js";

/** Configuration for subscription creation simulations. */
export type SimulationSubscriptionCreationConfig = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities: SimulationSubscriptionCreationConfigEntities;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options: SimulationSubscriptionCreationConfigOptions;
};

export const simulationSubscriptionCreationConfigSchema: Schema<SimulationSubscriptionCreationConfig> =
  s.object<SimulationSubscriptionCreationConfig>({
    entities: simulationSubscriptionCreationConfigEntitiesSchema,
    options: simulationSubscriptionCreationConfigOptionsSchema,
  });
