import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this simulation run. */
export const SimulationRunStatus = {
  /**
   * "pending": { "description": "Simulation run is pending. Paddle is sending events that are part
   * of this simulation." }
   */
  Pending: "pending",
  /**
   * "completed": { "description": "Simulation run is completed. Paddle attempted to send events
   * that are part of this simulation." }
   */
  Completed: "completed",
  /**
   * "canceled": { "description": "Simulation run is canceled. Simulation run was canceled before
   * all events were sent." }
   */
  Canceled: "canceled",
} as const;
export type SimulationRunStatus =
  | (typeof SimulationRunStatus)[keyof typeof SimulationRunStatus]
  | (string & {});

export const simulationRunStatusSchema: EnumSchema<SimulationRunStatus> =
  s.enumOf<SimulationRunStatus>(SimulationRunStatus);
