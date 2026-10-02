import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenarioRunSchema, type ScenarioRun } from "../scenario-run.js";
import { singleEventRunSchema, type SingleEventRun } from "../single-event-run.js";

/** Represents a simulation run entity. */
export type SimulationRunIncludes = SingleEventRun | ScenarioRun;

export const simulationRunIncludesSchema: Schema<SimulationRunIncludes> = s.of<SimulationRunIncludes>(
  s.union([s.lazy(() => singleEventRunSchema), s.lazy(() => scenarioRunSchema)]),
);
