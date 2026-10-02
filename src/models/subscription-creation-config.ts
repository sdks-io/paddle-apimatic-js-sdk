import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationSubscriptionCreationConfigCreateSchema,
  type SimulationSubscriptionCreationConfigCreate,
} from "./simulation-subscription-creation-config-create.js";

/** Configuration for subscription creation simulations. */
export type SubscriptionCreationConfig = {
  /** Configuration for subscription creation simulations. */
  subscriptionCreation?: SimulationSubscriptionCreationConfigCreate;
  subscriptionCancellation?: string | null;
  subscriptionPause?: string | null;
  subscriptionRenewal?: string | null;
  subscriptionResume?: string | null;
};

export const subscriptionCreationConfigSchema: Schema<SubscriptionCreationConfig> =
  s.object<SubscriptionCreationConfig>({
    subscriptionCreation: s.optional(s.lazy(() => simulationSubscriptionCreationConfigCreateSchema)),
    subscriptionCancellation: s.optionalNullable(s.string()),
    subscriptionPause: s.optionalNullable(s.string()),
    subscriptionRenewal: s.optionalNullable(s.string()),
    subscriptionResume: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionCreation: "subscription_creation",
      subscriptionCancellation: "subscription_cancellation",
      subscriptionPause: "subscription_pause",
      subscriptionRenewal: "subscription_renewal",
      subscriptionResume: "subscription_resume",
    },
  });
