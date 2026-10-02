import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { simulationEventRequestSchema, type SimulationEventRequest } from "../simulation-event-request.js";

/** Information about the request. Sent by Paddle as part of the simulation. */
export type SimulationEventRequest1 = SimulationEventRequest;

export const simulationEventRequest1Schema: Schema<SimulationEventRequest1> = s.of<SimulationEventRequest1>(
  s.union([s.lazy(() => simulationEventRequestSchema)]),
);
