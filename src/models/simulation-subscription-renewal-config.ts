import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentOutcomeOptionsSchema, type PaymentOutcomeOptions } from "./payment-outcome-options.js";
import {
  simulationSubscriptionRenewalConfigEntitiesSchema,
  type SimulationSubscriptionRenewalConfigEntities,
} from "./simulation-subscription-renewal-config-entities.js";

/** Configuration for subscription renewed simulations. */
export type SimulationSubscriptionRenewalConfig = {
  /** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
  entities: SimulationSubscriptionRenewalConfigEntities;
  /** Options that determine which webhooks are sent as part of a simulation. */
  options: PaymentOutcomeOptions;
};

export const simulationSubscriptionRenewalConfigSchema: Schema<SimulationSubscriptionRenewalConfig> =
  s.object<SimulationSubscriptionRenewalConfig>({
    entities: simulationSubscriptionRenewalConfigEntitiesSchema,
    options: paymentOutcomeOptionsSchema,
  });
