import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { payload1Schema, type Payload1 } from "./unions/payload1.js";

/** Represents a simulation entity for a single event when creating. */
export type SingleEvent1 = {
  /**
   * Paddle ID of the notification setting where this simulation is sent, prefixed with `ntfset_`.
   */
  notificationSettingId: string;
  /** Name of this simulation. */
  name: string;
  /** Single event sent for this simulation, in the format `entity.event_type`. */
  type: EventTypeName;
  /**
   * Simulation payload. Pass a JSON object that matches the schema for an event type to simulate a
   * custom payload. If omitted, Paddle populates with a demo example.
   */
  payload?: Payload1;
};

export const singleEvent1Schema: Schema<SingleEvent1> = s.object<SingleEvent1>({
  notificationSettingId: s.string(),
  name: s.string(),
  type: eventTypeNameSchema,
  payload: s.optional(s.lazy(() => payload1Schema)),
  _keysMap: {
    notificationSettingId: "notification_setting_id",
  },
});
