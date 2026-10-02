import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionCancellationConfigSchema,
  type SubscriptionCancellationConfig,
} from "../subscription-cancellation-config.js";
import {
  subscriptionCreationConfigSchema,
  type SubscriptionCreationConfig,
} from "../subscription-creation-config.js";
import {
  subscriptionPausedConfigSchema,
  type SubscriptionPausedConfig,
} from "../subscription-paused-config.js";
import {
  subscriptionRenewalConfigSchema,
  type SubscriptionRenewalConfig,
} from "../subscription-renewal-config.js";
import {
  subscriptionResumeConfigSchema,
  type SubscriptionResumeConfig,
} from "../subscription-resume-config.js";

/**
 * Configuration for this scenario simulation. Use to simulate more granular flows and populate
 * payloads with your own entity data.
 */
export type SimulationScenarioCreateConfig =
  | SubscriptionCancellationConfig
  | SubscriptionCreationConfig
  | SubscriptionPausedConfig
  | SubscriptionRenewalConfig
  | SubscriptionResumeConfig;

export const simulationScenarioCreateConfigSchema: Schema<SimulationScenarioCreateConfig> =
  s.of<SimulationScenarioCreateConfig>(
    s.union([
      s.lazy(() => subscriptionCancellationConfigSchema),
      s.lazy(() => subscriptionCreationConfigSchema),
      s.lazy(() => subscriptionPausedConfigSchema),
      s.lazy(() => subscriptionRenewalConfigSchema),
      s.lazy(() => subscriptionResumeConfigSchema),
    ]),
  );
