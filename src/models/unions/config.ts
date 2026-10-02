import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationScenarioConfigSchema,
  type SimulationScenarioConfig,
} from "../simulation-scenario-config.js";

/**
 * Configuration for this scenario simulation. Determines which granular flow is simulated and what
 * entities are used to populate webhook payloads with.
 */
export type Config = SimulationScenarioConfig;

export const configSchema: Schema<Config> = s.of<Config>(
  s.union([s.lazy(() => simulationScenarioConfigSchema)]),
);
