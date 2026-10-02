import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { simulationSchema, type Simulation } from "./unions/simulation.js";

export type SimulationsResponse = {
  data: Simulation[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const simulationsResponseSchema: Schema<SimulationsResponse> = s.object<SimulationsResponse>({
  data: s.array(s.lazy(() => simulationSchema)),
  meta: paginatedMetaSchema,
});
