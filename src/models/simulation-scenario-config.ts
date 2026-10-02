import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionCancellationSchema,
  type SubscriptionCancellation,
} from "./unions/subscription-cancellation.js";
import { subscriptionCreationSchema, type SubscriptionCreation } from "./unions/subscription-creation.js";
import { subscriptionPause1Schema, type SubscriptionPause1 } from "./unions/subscription-pause1.js";
import { subscriptionRenewalSchema, type SubscriptionRenewal } from "./unions/subscription-renewal.js";
import { subscriptionResumeSchema, type SubscriptionResume } from "./unions/subscription-resume.js";

/**
 * Configuration for this scenario simulation. Determines which granular flow is simulated and what
 * entities are used to populate webhook payloads with.
 */
export type SimulationScenarioConfig = {
  subscriptionCancellation: SubscriptionCancellation;
  subscriptionCreation: SubscriptionCreation;
  subscriptionPause: SubscriptionPause1;
  subscriptionRenewal: SubscriptionRenewal;
  subscriptionResume: SubscriptionResume;
};

export const simulationScenarioConfigSchema: Schema<SimulationScenarioConfig> =
  s.object<SimulationScenarioConfig>({
    subscriptionCancellation: subscriptionCancellationSchema,
    subscriptionCreation: subscriptionCreationSchema,
    subscriptionPause: subscriptionPause1Schema,
    subscriptionRenewal: subscriptionRenewalSchema,
    subscriptionResume: subscriptionResumeSchema,
    _keysMap: {
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionPause: "subscription_pause",
      subscriptionRenewal: "subscription_renewal",
      subscriptionResume: "subscription_resume",
    },
  });
