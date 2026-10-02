import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionCreationConfigOptionsCreateSchema,
  type SimulationSubscriptionCreationConfigOptionsCreate,
} from "./simulation-subscription-creation-config-options-create.js";
import {
  simulationSubscriptionCreationConfigEntitiesCreateSchema,
  type SimulationSubscriptionCreationConfigEntitiesCreate,
} from "./unions/simulation-subscription-creation-config-entities-create.js";

/** Configuration for subscription creation simulations. */
export type SimulationSubscriptionCreationConfigCreate = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities?: SimulationSubscriptionCreationConfigEntitiesCreate;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options?: SimulationSubscriptionCreationConfigOptionsCreate;
};

export const simulationSubscriptionCreationConfigCreateSchema: Schema<SimulationSubscriptionCreationConfigCreate> =
  s.object<SimulationSubscriptionCreationConfigCreate>({
    entities: s.optional(s.lazy(() => simulationSubscriptionCreationConfigEntitiesCreateSchema)),
    options: s.optional(s.lazy(() => simulationSubscriptionCreationConfigOptionsCreateSchema)),
  });
