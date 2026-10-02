import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionResumeConfigEntitiesCreateSchema,
  type SimulationSubscriptionResumeConfigEntitiesCreate,
} from "./simulation-subscription-resume-config-entities-create.js";
import {
  simulationSubscriptionResumeConfigOptionsCreateSchema,
  type SimulationSubscriptionResumeConfigOptionsCreate,
} from "./unions/simulation-subscription-resume-config-options-create.js";

/** Configuration for subscription resumed simulations. */
export type SimulationSubscriptionResumeConfigCreate = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities?: SimulationSubscriptionResumeConfigEntitiesCreate;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options?: SimulationSubscriptionResumeConfigOptionsCreate;
};

export const simulationSubscriptionResumeConfigCreateSchema: Schema<SimulationSubscriptionResumeConfigCreate> =
  s.object<SimulationSubscriptionResumeConfigCreate>({
    entities: s.optional(s.lazy(() => simulationSubscriptionResumeConfigEntitiesCreateSchema)),
    options: s.optional(s.lazy(() => simulationSubscriptionResumeConfigOptionsCreateSchema)),
  });
