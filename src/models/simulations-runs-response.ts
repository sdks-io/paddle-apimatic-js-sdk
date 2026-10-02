import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { simulationRunIncludesSchema, type SimulationRunIncludes } from "./unions/simulation-run-includes.js";

export type SimulationsRunsResponse = {
  data: SimulationRunIncludes[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const simulationsRunsResponseSchema: Schema<SimulationsRunsResponse> =
  s.object<SimulationsRunsResponse>({
    data: s.array(s.lazy(() => simulationRunIncludesSchema)),
    meta: paginatedMetaSchema,
  });
