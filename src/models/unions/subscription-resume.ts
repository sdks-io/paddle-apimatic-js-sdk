import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationSubscriptionResumeConfigSchema,
  type SimulationSubscriptionResumeConfig,
} from "../simulation-subscription-resume-config.js";

export type SubscriptionResume = SimulationSubscriptionResumeConfig;

export const subscriptionResumeSchema: Schema<SubscriptionResume> = s.of<SubscriptionResume>(
  s.union([s.lazy(() => simulationSubscriptionResumeConfigSchema)]),
);
