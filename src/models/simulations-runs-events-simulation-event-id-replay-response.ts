import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationEventSchema, type SimulationEvent } from "./simulation-event.js";

export type SimulationsRunsEventsSimulationEventIdReplayResponse = {
  /** Represents a simulation event. */
  data: SimulationEvent;
  /** Information about this response. */
  meta: Meta;
};

export const simulationsRunsEventsSimulationEventIdReplayResponseSchema: Schema<SimulationsRunsEventsSimulationEventIdReplayResponse> =
  s.object<SimulationsRunsEventsSimulationEventIdReplayResponse>({
    data: simulationEventSchema,
    meta: metaSchema,
  });
