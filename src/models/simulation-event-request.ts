import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the request. Sent by Paddle as part of the simulation. */
export type SimulationEventRequest = {
  /** Request body sent by Paddle. */
  body: string;
};

export const simulationEventRequestSchema: Schema<SimulationEventRequest> = s.object<SimulationEventRequest>({
  body: s.string(),
});
