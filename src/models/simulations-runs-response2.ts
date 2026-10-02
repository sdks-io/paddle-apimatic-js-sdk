import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationRunIncludesSchema, type SimulationRunIncludes } from "./unions/simulation-run-includes.js";

export type SimulationsRunsResponse2 = {
  /** Represents a simulation run entity. */
  data: SimulationRunIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const simulationsRunsResponse2Schema: Schema<SimulationsRunsResponse2> =
  s.object<SimulationsRunsResponse2>({
    data: simulationRunIncludesSchema,
    meta: metaSchema,
  });
