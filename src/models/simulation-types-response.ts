import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationTypeSchema, type SimulationType } from "./simulation-type.js";

export type SimulationTypesResponse = {
  data: SimulationType[];
  /** Information about this response. */
  meta: Meta;
};

export const simulationTypesResponseSchema: Schema<SimulationTypesResponse> =
  s.object<SimulationTypesResponse>({
    data: s.array(s.lazy(() => simulationTypeSchema)),
    meta: metaSchema,
  });
