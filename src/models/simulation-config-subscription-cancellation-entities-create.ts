import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionId2Schema, type SubscriptionId2 } from "./unions/subscription-id2.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationConfigSubscriptionCancellationEntitiesCreate = {
  /**
   * Paddle ID of a subscription to simulate as canceled. Adds details of that subscription to
   * webhook payloads.
   */
  subscriptionId?: SubscriptionId2;
};

export const simulationConfigSubscriptionCancellationEntitiesCreateSchema: Schema<SimulationConfigSubscriptionCancellationEntitiesCreate> =
  s.object<SimulationConfigSubscriptionCancellationEntitiesCreate>({
    subscriptionId: s.optional(s.lazy(() => subscriptionId2Schema)),
    _keysMap: {
      subscriptionId: "subscription_id",
    },
  });
