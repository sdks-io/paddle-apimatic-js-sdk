import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenario1Schema, type Scenario1 } from "../scenario1.js";
import { singleEvent1Schema, type SingleEvent1 } from "../single-event1.js";

/** Represents a simulation entity when creating. */
export type SimulationCreate = SingleEvent1 | Scenario1;

export const simulationCreateSchema: Schema<SimulationCreate> = s.of<SimulationCreate>(
  s.union([s.lazy(() => singleEvent1Schema), s.lazy(() => scenario1Schema)]),
);
