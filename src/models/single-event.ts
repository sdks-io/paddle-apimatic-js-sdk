import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { Status, statusSchema } from "./status.js";
import { lastRunAtSchema, type LastRunAt } from "./unions/last-run-at.js";
import { payloadSchema, type Payload } from "./unions/payload.js";

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
  payload: Payload;
  /** Configuration for scenario simulations. `null` for single events. */
  config: string | null;
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

export const singleEventSchema: Schema<SingleEvent> = s.object<SingleEvent>({
  id: s.string(),
  status: s.defaulted(statusSchema, Status.Active),
  notificationSettingId: s.string(),
  name: s.string(),
  type: eventTypeNameSchema,
  payload: payloadSchema,
  config: s.nullable(s.string()),
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
