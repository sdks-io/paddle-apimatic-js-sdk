import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationEventSchema, type SimulationEvent } from "./simulation-event.js";

export type SimulationsRunsEventsSimulationEventIdResponse = {
  /** Represents a simulation event. */
  data: SimulationEvent;
  /** Information about this response. */
  meta: Meta;
};

export const simulationsRunsEventsSimulationEventIdResponseSchema: Schema<SimulationsRunsEventsSimulationEventIdResponse> =
  s.object<SimulationsRunsEventsSimulationEventIdResponse>({
    data: simulationEventSchema,
    meta: metaSchema,
  });
