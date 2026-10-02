import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationRunSchema, type SimulationRun } from "./unions/simulation-run.js";

export type SimulationsRunsResponse1 = {
  /** Represents a simulation run entity. */
  data: SimulationRun;
  /** Information about this response. */
  meta: Meta;
};

export const simulationsRunsResponse1Schema: Schema<SimulationsRunsResponse1> =
  s.object<SimulationsRunsResponse1>({
    data: simulationRunSchema,
    meta: metaSchema,
  });
