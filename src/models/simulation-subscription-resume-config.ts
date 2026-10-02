import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentOutcomeOptionsSchema, type PaymentOutcomeOptions } from "./payment-outcome-options.js";
import {
  simulationSubscriptionResumeConfigEntitiesSchema,
  type SimulationSubscriptionResumeConfigEntities,
} from "./simulation-subscription-resume-config-entities.js";

/** Configuration for subscription resumed simulations. */
export type SimulationSubscriptionResumeConfig = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities: SimulationSubscriptionResumeConfigEntities;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options: PaymentOutcomeOptions;
};

export const simulationSubscriptionResumeConfigSchema: Schema<SimulationSubscriptionResumeConfig> =
  s.object<SimulationSubscriptionResumeConfig>({
    entities: simulationSubscriptionResumeConfigEntitiesSchema,
    options: paymentOutcomeOptionsSchema,
  });
