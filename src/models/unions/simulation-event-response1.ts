import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { simulationEventResponseSchema, type SimulationEventResponse } from "../simulation-event-response.js";

/** Information about the response. Sent by the responding server for the notification setting. */
export type SimulationEventResponse1 = SimulationEventResponse;

export const simulationEventResponse1Schema: Schema<SimulationEventResponse1> =
  s.of<SimulationEventResponse1>(s.union([s.lazy(() => simulationEventResponseSchema)]));
