import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationSubscriptionRenewalConfigSchema,
  type SimulationSubscriptionRenewalConfig,
} from "../simulation-subscription-renewal-config.js";

export type SubscriptionRenewal = SimulationSubscriptionRenewalConfig;

export const subscriptionRenewalSchema: Schema<SubscriptionRenewal> = s.of<SubscriptionRenewal>(
  s.union([s.lazy(() => simulationSubscriptionRenewalConfigSchema)]),
);
