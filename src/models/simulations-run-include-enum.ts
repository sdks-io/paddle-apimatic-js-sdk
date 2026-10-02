import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimulationsRunIncludeEnum = {
  /**
   * "events": { "description": "Include an array of events related to this simulation run in the
   * response." }
   */
  Events: "events",
} as const;
export type SimulationsRunIncludeEnum =
  | (typeof SimulationsRunIncludeEnum)[keyof typeof SimulationsRunIncludeEnum]
  | (string & {});

export const simulationsRunIncludeEnumSchema: EnumSchema<SimulationsRunIncludeEnum> =
  s.enumOf<SimulationsRunIncludeEnum>(SimulationsRunIncludeEnum);
