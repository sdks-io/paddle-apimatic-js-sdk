import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionRenewalEntitiesCreateSchema,
  type SimulationSubscriptionRenewalEntitiesCreate,
} from "./simulation-subscription-renewal-entities-create.js";
import {
  simulationSubscriptionRenewalOptionsCreateSchema,
  type SimulationSubscriptionRenewalOptionsCreate,
} from "./unions/simulation-subscription-renewal-options-create.js";

/** Configuration for subscription renewed simulations. */
export type SimulationConfigSubscriptionRenewalCreateSubscriptionRenewal = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities?: SimulationSubscriptionRenewalEntitiesCreate;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options?: SimulationSubscriptionRenewalOptionsCreate;
};

export const simulationConfigSubscriptionRenewalCreateSubscriptionRenewalSchema: Schema<SimulationConfigSubscriptionRenewalCreateSubscriptionRenewal> =
  s.object<SimulationConfigSubscriptionRenewalCreateSubscriptionRenewal>({
    entities: s.optional(s.lazy(() => simulationSubscriptionRenewalEntitiesCreateSchema)),
    options: s.optional(s.lazy(() => simulationSubscriptionRenewalOptionsCreateSchema)),
  });
