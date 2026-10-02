import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationConfigOptionsPaymentFailedDunningExhaustedAction = {
  /**
   * "subscription_paused": { "description": "Simulates as if the subscription is paused after all
   * payment recovery attempts are exhausted." }
   */
  SubscriptionPaused: "subscription_paused",
  /**
   * "subscription_canceled": { "description": "Simulates as if the subscription is paused after all
   * payment recovery attempts are exhausted." }
   */
  SubscriptionCanceled: "subscription_canceled",
} as const;
export type SimulationConfigOptionsPaymentFailedDunningExhaustedAction =
  | (typeof SimulationConfigOptionsPaymentFailedDunningExhaustedAction)[keyof typeof SimulationConfigOptionsPaymentFailedDunningExhaustedAction]
  | (string & {});

export const simulationConfigOptionsPaymentFailedDunningExhaustedActionSchema: EnumSchema<SimulationConfigOptionsPaymentFailedDunningExhaustedAction> =
  s.enumOf<SimulationConfigOptionsPaymentFailedDunningExhaustedAction>(
    SimulationConfigOptionsPaymentFailedDunningExhaustedAction,
  );
