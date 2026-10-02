import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { simulationSchema, type Simulation } from "./unions/simulation.js";

export type SimulationsResponse1 = {
  /** Represents a simulation entity. */
  data: Simulation;
  /** Information about this response. */
  meta: Meta;
};

export const simulationsResponse1Schema: Schema<SimulationsResponse1> = s.object<SimulationsResponse1>({
  data: simulationSchema,
  meta: metaSchema,
});
