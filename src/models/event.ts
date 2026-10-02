import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

/** Represents an event entity. */
export type Event = {
  eventId: string;
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** New or changed entity. */
  data: Record<string, unknown>;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  eventId: s.string(),
  eventType: eventTypeNameSchema,
  occurredAt: s.dateTime(),
  data: s.record(s.string(), s.unknown()),
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    occurredAt: "occurred_at",
  },
});
