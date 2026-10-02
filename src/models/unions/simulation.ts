import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenarioSchema, type Scenario } from "../scenario.js";
import { singleEventSchema, type SingleEvent } from "../single-event.js";

/** Represents a simulation entity. */
export type Simulation = SingleEvent | Scenario;

export const simulationSchema: Schema<Simulation> = s.of<Simulation>(
  s.union([s.lazy(() => singleEventSchema), s.lazy(() => scenarioSchema)]),
);
