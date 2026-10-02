import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigSubscriptionPauseConfigCreateSchema,
  type SimulationConfigSubscriptionPauseConfigCreate,
} from "./simulation-config-subscription-pause-config-create.js";

/** Configuration for subscription paused simulations. */
export type SubscriptionPausedConfig = {
  /** Configuration for subscription paused simulations. */
  subscriptionPause?: SimulationConfigSubscriptionPauseConfigCreate;
  subscriptionCancellation?: string | null;
  subscriptionCreation?: string | null;
  subscriptionRenewal?: string | null;
  subscriptionResume?: string | null;
};

export const subscriptionPausedConfigSchema: Schema<SubscriptionPausedConfig> =
  s.object<SubscriptionPausedConfig>({
    subscriptionPause: s.optional(s.lazy(() => simulationConfigSubscriptionPauseConfigCreateSchema)),
    subscriptionCancellation: s.optionalNullable(s.string()),
    subscriptionCreation: s.optionalNullable(s.string()),
    subscriptionRenewal: s.optionalNullable(s.string()),
    subscriptionResume: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionPause: "subscription_pause",
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionRenewal: "subscription_renewal",
      subscriptionResume: "subscription_resume",
    },
  });
