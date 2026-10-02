import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulationRunStatusSchema, type SimulationRunStatus } from "./simulation-run-status.js";
import { simulationScenarioTypeSchema, type SimulationScenarioType } from "./simulation-scenario-type.js";

/** Scenario simulations play all events sent for a subscription lifecycle event. */
export type ScenarioRun1 = {
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
};

export const scenarioRun1Schema: Schema<ScenarioRun1> = s.object<ScenarioRun1>({
  id: s.string(),
  status: simulationRunStatusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  type: simulationScenarioTypeSchema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
