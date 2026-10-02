import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenario2Schema, type Scenario2 } from "../scenario2.js";
import { singleEvent2Schema, type SingleEvent2 } from "../single-event2.js";

/** Represents a simulation entity when updating. */
export type SimulationUpdate = SingleEvent2 | Scenario2;

export const simulationUpdateSchema: Schema<SimulationUpdate> = s.of<SimulationUpdate>(
  s.union([s.lazy(() => singleEvent2Schema), s.lazy(() => scenario2Schema)]),
);
