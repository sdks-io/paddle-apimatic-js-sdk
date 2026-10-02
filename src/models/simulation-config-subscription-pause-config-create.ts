import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigSubscriptionPauseEntitiesConfigCreateSchema,
  type SimulationConfigSubscriptionPauseEntitiesConfigCreate,
} from "./simulation-config-subscription-pause-entities-config-create.js";
import {
  simulationConfigSubscriptionPauseOptionsConfigCreateSchema,
  type SimulationConfigSubscriptionPauseOptionsConfigCreate,
} from "./simulation-config-subscription-pause-options-config-create.js";

/** Configuration for subscription paused simulations. */
export type SimulationConfigSubscriptionPauseConfigCreate = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities?: SimulationConfigSubscriptionPauseEntitiesConfigCreate;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options?: SimulationConfigSubscriptionPauseOptionsConfigCreate;
};

export const simulationConfigSubscriptionPauseConfigCreateSchema: Schema<SimulationConfigSubscriptionPauseConfigCreate> =
  s.object<SimulationConfigSubscriptionPauseConfigCreate>({
    entities: s.optional(s.lazy(() => simulationConfigSubscriptionPauseEntitiesConfigCreateSchema)),
    options: s.optional(s.lazy(() => simulationConfigSubscriptionPauseOptionsConfigCreateSchema)),
  });
