import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this simulation run log. */
export const SimulationEventStatus = {
  /**
   * "pending": { "description": "Simulation run log is pending. Paddle hasn't yet tried to deliver
   * the simulated event." }
   */
  Pending: "pending",
  /**
   * "success": { "description": "Simulation run log was successful. Paddle delivered the simulated
   * event successfully." }
   */
  Success: "success",
  /**
   * "failed": { "description": "Simulation run log failed. Paddle tried to deliver the simulated
   * event, but it failed. If `response` object is `null`, no response received from your server.
   * Check your notification setting endpoint configuration." }
   */
  Failed: "failed",
  /**
   * "aborted": { "description": "Simulation run log aborted. Paddle could not attempt delivery of
   * the simulated event." }
   */
  Aborted: "aborted",
} as const;
export type SimulationEventStatus =
  | (typeof SimulationEventStatus)[keyof typeof SimulationEventStatus]
  | (string & {});

export const simulationEventStatusSchema: EnumSchema<SimulationEventStatus> =
  s.enumOf<SimulationEventStatus>(SimulationEventStatus);
