import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenarioRun1Schema, type ScenarioRun1 } from "../scenario-run1.js";
import { singleEventRun1Schema, type SingleEventRun1 } from "../single-event-run1.js";

/** Represents a simulation run entity. */
export type SimulationRun = SingleEventRun1 | ScenarioRun1;

export const simulationRunSchema: Schema<SimulationRun> = s.of<SimulationRun>(
  s.union([s.lazy(() => singleEventRun1Schema), s.lazy(() => scenarioRun1Schema)]),
);
