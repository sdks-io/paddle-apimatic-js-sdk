import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionCancellationConfigEntitiesSchema,
  type SimulationSubscriptionCancellationConfigEntities,
} from "./simulation-subscription-cancellation-config-entities.js";
import {
  simulationSubscriptionCancellationConfigOptionsSchema,
  type SimulationSubscriptionCancellationConfigOptions,
} from "./simulation-subscription-cancellation-config-options.js";

/** Configuration for subscription canceled simulations. */
export type SimulationSubscriptionCancellationConfig = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities: SimulationSubscriptionCancellationConfigEntities;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options: SimulationSubscriptionCancellationConfigOptions;
};

export const simulationSubscriptionCancellationConfigSchema: Schema<SimulationSubscriptionCancellationConfig> =
  s.object<SimulationSubscriptionCancellationConfig>({
    entities: simulationSubscriptionCancellationConfigEntitiesSchema,
    options: simulationSubscriptionCancellationConfigOptionsSchema,
  });
