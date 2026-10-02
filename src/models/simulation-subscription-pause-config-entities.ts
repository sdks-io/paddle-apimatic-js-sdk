import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionId3Schema, type SubscriptionId3 } from "./unions/subscription-id3.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationSubscriptionPauseConfigEntities = {
  /**
   * Paddle ID of a subscription to simulate as paused. Adds details of that subscription to webhook
   * payloads.
   */
  subscriptionId: SubscriptionId3;
};

export const simulationSubscriptionPauseConfigEntitiesSchema: Schema<SimulationSubscriptionPauseConfigEntities> =
  s.object<SimulationSubscriptionPauseConfigEntities>({
    subscriptionId: subscriptionId3Schema,
    _keysMap: {
      subscriptionId: "subscription_id",
    },
  });
