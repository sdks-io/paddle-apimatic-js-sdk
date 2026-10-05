import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Adds details of existing Paddle entities to webhook payloads sent in the simulation. */
export type SimulationConfigSubscriptionPauseEntitiesConfigCreate = {
  /**
   * Paddle ID of a subscription to simulate as paused. Adds details of that subscription to webhook
   * payloads.
   */
  subscriptionId?: string | null;
};

export const simulationConfigSubscriptionPauseEntitiesConfigCreateSchema: Schema<SimulationConfigSubscriptionPauseEntitiesConfigCreate> =
  s.object<SimulationConfigSubscriptionPauseEntitiesConfigCreate>({
    subscriptionId: s.optionalNullable(s.string()),
    _keysMap: {
      subscriptionId: "subscription_id",
    },
  });
