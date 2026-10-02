import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigSubscriptionCancellationConfigCreateSchema,
  type SimulationConfigSubscriptionCancellationConfigCreate,
} from "./simulation-config-subscription-cancellation-config-create.js";

/** Configuration for subscription canceled simulations. */
export type SubscriptionCancellationConfig = {
  /** Configuration for subscription canceled simulations. */
  subscriptionCancellation?: SimulationConfigSubscriptionCancellationConfigCreate;
  subscriptionCreation?: string | null;
  subscriptionPause?: string | null;
  subscriptionRenewal?: string | null;
  subscriptionResume?: string | null;
};

export const subscriptionCancellationConfigSchema: Schema<SubscriptionCancellationConfig> =
  s.object<SubscriptionCancellationConfig>({
    subscriptionCancellation: s.optional(
      s.lazy(() => simulationConfigSubscriptionCancellationConfigCreateSchema),
    ),
    subscriptionCreation: s.optionalNullable(s.string()),
    subscriptionPause: s.optionalNullable(s.string()),
    subscriptionRenewal: s.optionalNullable(s.string()),
    subscriptionResume: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionPause: "subscription_pause",
      subscriptionRenewal: "subscription_renewal",
      subscriptionResume: "subscription_resume",
    },
  });
