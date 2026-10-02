import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulationScenarioTypeSchema, type SimulationScenarioType } from "./simulation-scenario-type.js";
import { Status, statusSchema } from "./status.js";
import { configSchema, type Config } from "./unions/config.js";
import { lastRunAtSchema, type LastRunAt } from "./unions/last-run-at.js";

/** Scenario simulations play all events sent for a subscription lifecycle event. */
export type Scenario = {
  /** Unique Paddle ID for this simulation, prefixed with `ntfsim_`. */
  id: string;
  /** @default Status.Active */
  status?: Status;
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
  /** Simulation payload. `null` for scenarios. */
  payload: string | null;
  /**
   * Configuration for this scenario simulation. Determines which granular flow is simulated and
   * what entities are used to populate webhook payloads with.
   */
  config: Config;
  /**
   * RFC 3339 datetime string of when this simulation was last run. `null` until run. Set
   * automatically by Paddle.
   */
  lastRunAt: LastRunAt;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const scenarioSchema: Schema<Scenario> = s.object<Scenario>({
  id: s.string(),
  status: s.defaulted(statusSchema, Status.Active),
  notificationSettingId: s.string(),
  name: s.string(),
  type: simulationScenarioTypeSchema,
  payload: s.nullable(s.string()),
  config: configSchema,
  lastRunAt: lastRunAtSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    notificationSettingId: "notification_setting_id",
    lastRunAt: "last_run_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
