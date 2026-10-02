import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationSubscriptionCreationConfigSchema,
  type SimulationSubscriptionCreationConfig,
} from "../simulation-subscription-creation-config.js";

export type SubscriptionCreation = SimulationSubscriptionCreationConfig;

export const subscriptionCreationSchema: Schema<SubscriptionCreation> = s.of<SubscriptionCreation>(
  s.union([s.lazy(() => simulationSubscriptionCreationConfigSchema)]),
);
