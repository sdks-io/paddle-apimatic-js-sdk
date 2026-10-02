import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigSubscriptionCancellationEntitiesCreateSchema,
  type SimulationConfigSubscriptionCancellationEntitiesCreate,
} from "./simulation-config-subscription-cancellation-entities-create.js";
import {
  simulationConfigSubscriptionCancellationOptionsCreateSchema,
  type SimulationConfigSubscriptionCancellationOptionsCreate,
} from "./simulation-config-subscription-cancellation-options-create.js";

/** Configuration for subscription canceled simulations. */
export type SimulationConfigSubscriptionCancellationConfigCreate = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities?: SimulationConfigSubscriptionCancellationEntitiesCreate;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options?: SimulationConfigSubscriptionCancellationOptionsCreate;
};

export const simulationConfigSubscriptionCancellationConfigCreateSchema: Schema<SimulationConfigSubscriptionCancellationConfigCreate> =
  s.object<SimulationConfigSubscriptionCancellationConfigCreate>({
    entities: s.optional(s.lazy(() => simulationConfigSubscriptionCancellationEntitiesCreateSchema)),
    options: s.optional(s.lazy(() => simulationConfigSubscriptionCancellationOptionsCreateSchema)),
  });
