import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionId5Schema, type SubscriptionId5 } from "./unions/subscription-id5.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationSubscriptionResumeConfigEntitiesCreate = {
  /**
   * Paddle ID of a subscription to simulate as resumed. Adds details of that subscription to
   * webhook payloads.
   */
  subscriptionId?: SubscriptionId5;
};

export const simulationSubscriptionResumeConfigEntitiesCreateSchema: Schema<SimulationSubscriptionResumeConfigEntitiesCreate> =
  s.object<SimulationSubscriptionResumeConfigEntitiesCreate>({
    subscriptionId: s.optional(s.lazy(() => subscriptionId5Schema)),
    _keysMap: {
      subscriptionId: "subscription_id",
    },
  });
