import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationSubscriptionPauseConfigSchema,
  type SimulationSubscriptionPauseConfig,
} from "../simulation-subscription-pause-config.js";

export type SubscriptionPause1 = SimulationSubscriptionPauseConfig;

export const subscriptionPause1Schema: Schema<SubscriptionPause1> = s.of<SubscriptionPause1>(
  s.union([s.lazy(() => simulationSubscriptionPauseConfigSchema)]),
);
