import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { Status, statusSchema } from "./status.js";

/** Single event simulations play a single event. */
export type SingleEvent = {
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
  /** Single event sent for this simulation, in the format `entity.event_type`. */
  type: EventTypeName;
  /** Simulation payload. */
  payload: Record<string, unknown> | null;
  /** Configuration for scenario simulations. `null` for single events. */
  config: string | null;
  /**
   * RFC 3339 datetime string of when this simulation was last run. `null` until run. Set
   * automatically by Paddle.
   */
  lastRunAt: Date | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const singleEventSchema: Schema<SingleEvent> = s.object<SingleEvent>({
  id: s.string(),
  status: s.defaulted(statusSchema, Status.Active),
  notificationSettingId: s.string(),
  name: s.string(),
  type: eventTypeNameSchema,
  payload: s.nullable(s.record(s.string(), s.unknown())),
  config: s.nullable(s.string()),
  lastRunAt: s.nullable(s.dateTime()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    notificationSettingId: "notification_setting_id",
    lastRunAt: "last_run_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
