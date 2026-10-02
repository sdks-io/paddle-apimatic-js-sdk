import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { statusSchema, type Status } from "./status.js";
import { payload2Schema, type Payload2 } from "./unions/payload2.js";

/** Represents a simulation entity for a single event when updating. */
export type SingleEvent2 = {
  /**
   * Paddle ID of the notification setting where this simulation is sent, prefixed with `ntfset_`.
   */
  notificationSettingId?: string;
  /** Name of this simulation. */
  name?: string;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /** Single event sent for this simulation, in the format `entity.event_type`. */
  type?: EventTypeName;
  /**
   * Simulation payload. Pass a JSON object that matches the schema for an event type to simulate a
   * custom payload. Set to `null` to clear and populate with a demo example.
   */
  payload?: Payload2;
};

export const singleEvent2Schema: Schema<SingleEvent2> = s.object<SingleEvent2>({
  notificationSettingId: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  type: s.optional(s.lazy(() => eventTypeNameSchema)),
  payload: s.optional(s.lazy(() => payload2Schema)),
  _keysMap: {
    notificationSettingId: "notification_setting_id",
  },
});
