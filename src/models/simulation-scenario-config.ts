import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionCancellationConfigSchema,
  type SimulationSubscriptionCancellationConfig,
} from "./simulation-subscription-cancellation-config.js";
import {
  simulationSubscriptionCreationConfigSchema,
  type SimulationSubscriptionCreationConfig,
} from "./simulation-subscription-creation-config.js";
import {
  simulationSubscriptionPauseConfigSchema,
  type SimulationSubscriptionPauseConfig,
} from "./simulation-subscription-pause-config.js";
import {
  simulationSubscriptionRenewalConfigSchema,
  type SimulationSubscriptionRenewalConfig,
} from "./simulation-subscription-renewal-config.js";
import {
  simulationSubscriptionResumeConfigSchema,
  type SimulationSubscriptionResumeConfig,
} from "./simulation-subscription-resume-config.js";

/**
 * Configuration for this scenario simulation. Determines which granular flow is simulated and what
 * entities are used to populate webhook payloads with.
 */
export type SimulationScenarioConfig = {
  subscriptionCancellation: SimulationSubscriptionCancellationConfig | null;
  subscriptionCreation: SimulationSubscriptionCreationConfig | null;
  subscriptionPause: SimulationSubscriptionPauseConfig | null;
  subscriptionRenewal: SimulationSubscriptionRenewalConfig | null;
  subscriptionResume: SimulationSubscriptionResumeConfig | null;
};

export const simulationScenarioConfigSchema: Schema<SimulationScenarioConfig> =
  s.object<SimulationScenarioConfig>({
    subscriptionCancellation: s.nullable(s.lazy(() => simulationSubscriptionCancellationConfigSchema)),
    subscriptionCreation: s.nullable(s.lazy(() => simulationSubscriptionCreationConfigSchema)),
    subscriptionPause: s.nullable(s.lazy(() => simulationSubscriptionPauseConfigSchema)),
    subscriptionRenewal: s.nullable(s.lazy(() => simulationSubscriptionRenewalConfigSchema)),
    subscriptionResume: s.nullable(s.lazy(() => simulationSubscriptionResumeConfigSchema)),
    _keysMap: {
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionPause: "subscription_pause",
      subscriptionRenewal: "subscription_renewal",
      subscriptionResume: "subscription_resume",
    },
  });
