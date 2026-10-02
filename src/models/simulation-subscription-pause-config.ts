import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionPauseConfigEntitiesSchema,
  type SimulationSubscriptionPauseConfigEntities,
} from "./simulation-subscription-pause-config-entities.js";
import {
  simulationSubscriptionPauseConfigOptionsSchema,
  type SimulationSubscriptionPauseConfigOptions,
} from "./simulation-subscription-pause-config-options.js";

/** Configuration for subscription paused simulations. */
export type SimulationSubscriptionPauseConfig = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities: SimulationSubscriptionPauseConfigEntities;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options: SimulationSubscriptionPauseConfigOptions;
};

export const simulationSubscriptionPauseConfigSchema: Schema<SimulationSubscriptionPauseConfig> =
  s.object<SimulationSubscriptionPauseConfig>({
    entities: simulationSubscriptionPauseConfigEntitiesSchema,
    options: simulationSubscriptionPauseConfigOptionsSchema,
  });
