import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { simulationEventSchema, type SimulationEvent } from "./simulation-event.js";

export type SimulationsRunsEventsResponse = {
  data: SimulationEvent[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const simulationsRunsEventsResponseSchema: Schema<SimulationsRunsEventsResponse> =
  s.object<SimulationsRunsEventsResponse>({
    data: s.array(s.lazy(() => simulationEventSchema)),
    meta: paginatedMetaSchema,
  });
