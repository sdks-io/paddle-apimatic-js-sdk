import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulationScenarioTypeSchema, type SimulationScenarioType } from "./simulation-scenario-type.js";
import {
  simulationScenarioCreateConfigSchema,
  type SimulationScenarioCreateConfig,
} from "./unions/simulation-scenario-create-config.js";

/** Represents a simulation entity for a scenario when creating. */
export type Scenario1 = {
  /**
   * Paddle ID of the notification setting where this simulation is sent, prefixed with `ntfset_`.
   */
  notificationSettingId: string;
  /** Name of this simulation. */
  name: string;
  /**
   * Scenario for this simulation. Scenario simulations play all events sent for a subscription
   * lifecycle event.
   */
  type: SimulationScenarioType;
  /**
   * Configuration for this scenario simulation. Use to simulate more granular flows and populate
   * payloads with your own entity data. If omitted, Paddle simulates the default scenario flow and
   * populates payloads with demo examples.
   */
  config?: SimulationScenarioCreateConfig;
};

export const scenario1Schema: Schema<Scenario1> = s.object<Scenario1>({
  notificationSettingId: s.string(),
  name: s.string(),
  type: simulationScenarioTypeSchema,
  config: s.optional(s.lazy(() => simulationScenarioCreateConfigSchema)),
  _keysMap: {
    notificationSettingId: "notification_setting_id",
  },
});
