import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionResumeConfigCreateSchema,
  type SimulationSubscriptionResumeConfigCreate,
} from "./simulation-subscription-resume-config-create.js";

/** Configuration for subscription resumed simulations. */
export type SubscriptionResumeConfig = {
  /** Configuration for subscription resumed simulations. */
  subscriptionResume?: SimulationSubscriptionResumeConfigCreate;
  subscriptionCancellation?: string | null;
  subscriptionCreation?: string | null;
  subscriptionPause?: string | null;
  subscriptionRenewal?: string | null;
};

export const subscriptionResumeConfigSchema: Schema<SubscriptionResumeConfig> =
  s.object<SubscriptionResumeConfig>({
    subscriptionResume: s.optional(s.lazy(() => simulationSubscriptionResumeConfigCreateSchema)),
    subscriptionCancellation: s.optionalNullable(s.string()),
    subscriptionCreation: s.optionalNullable(s.string()),
    subscriptionPause: s.optionalNullable(s.string()),
    subscriptionRenewal: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionResume: "subscription_resume",
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionPause: "subscription_pause",
      subscriptionRenewal: "subscription_renewal",
    },
  });
