import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigSubscriptionRenewalCreateSubscriptionRenewalSchema,
  type SimulationConfigSubscriptionRenewalCreateSubscriptionRenewal,
} from "./simulation-config-subscription-renewal-create-subscription-renewal.js";

/** Configuration for subscription renewed simulations. */
export type SubscriptionRenewalConfig = {
  /** Configuration for subscription renewed simulations. */
  subscriptionRenewal?: SimulationConfigSubscriptionRenewalCreateSubscriptionRenewal;
  subscriptionCancellation?: string | null;
  subscriptionCreation?: string | null;
  subscriptionPause?: string | null;
  subscriptionResume?: string | null;
};

export const subscriptionRenewalConfigSchema: Schema<SubscriptionRenewalConfig> =
  s.object<SubscriptionRenewalConfig>({
    subscriptionRenewal: s.optional(
      s.lazy(() => simulationConfigSubscriptionRenewalCreateSubscriptionRenewalSchema),
    ),
    subscriptionCancellation: s.optionalNullable(s.string()),
    subscriptionCreation: s.optionalNullable(s.string()),
    subscriptionPause: s.optionalNullable(s.string()),
    subscriptionResume: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionRenewal: "subscription_renewal",
      subscriptionCancellation: "subscription_cancellation",
      subscriptionCreation: "subscription_creation",
      subscriptionPause: "subscription_pause",
      subscriptionResume: "subscription_resume",
    },
  });
