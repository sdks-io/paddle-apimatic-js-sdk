import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulationEventSchema, type SimulationEvent } from "./simulation-event.js";
import { simulationRunStatusSchema, type SimulationRunStatus } from "./simulation-run-status.js";
import { simulationScenarioTypeSchema, type SimulationScenarioType } from "./simulation-scenario-type.js";

/** Scenario simulations play all events sent for a subscription lifecycle event. */
export type ScenarioRun = {
  id: string;
  /** Status of this simulation run. */
  status: SimulationRunStatus;
  createdAt: Date;
  updatedAt: Date;
  /**
   * Scenario for this simulation. Scenario simulations play all events sent for a subscription
   * lifecycle event.
   */
  type: SimulationScenarioType;
  /**
   * Events associated with this simulation run. Paddle creates a list of events for each simulation
   * runs. Returned when the `include` parameter is used with the `events` value.
   */
  events?: SimulationEvent[];
};

export const scenarioRunSchema: Schema<ScenarioRun> = s.object<ScenarioRun>({
  id: s.string(),
  status: simulationRunStatusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  type: simulationScenarioTypeSchema,
  events: s.optional(s.array(s.lazy(() => simulationEventSchema))),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
