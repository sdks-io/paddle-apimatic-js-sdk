import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionId4Schema, type SubscriptionId4 } from "./unions/subscription-id4.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationSubscriptionRenewalEntitiesCreate = {
  /**
   * Paddle ID of a subscription to simulate as renewed. Adds details of that subscription to
   * webhook payloads.
   */
  subscriptionId?: SubscriptionId4;
};

export const simulationSubscriptionRenewalEntitiesCreateSchema: Schema<SimulationSubscriptionRenewalEntitiesCreate> =
  s.object<SimulationSubscriptionRenewalEntitiesCreate>({
    subscriptionId: s.optional(s.lazy(() => subscriptionId4Schema)),
    _keysMap: {
      subscriptionId: "subscription_id",
    },
  });
