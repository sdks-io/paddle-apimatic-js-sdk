import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data17Schema, type Data17 } from "./data17.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

export type CustomerImportedRequest = {
  /** Unique Paddle ID for this event, prefixed with `evt_`. */
  eventId: string;
  /** Type of event sent by Paddle, in the format `entity.event_type`. */
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId: string;
  /** New or changed entity. */
  data: Data17;
};

export const customerImportedRequestSchema: Schema<CustomerImportedRequest> =
  s.object<CustomerImportedRequest>({
    eventId: s.string(),
    eventType: eventTypeNameSchema,
    occurredAt: s.dateTime(),
    notificationId: s.string(),
    data: data17Schema,
    _keysMap: {
      eventId: "event_id",
      eventType: "event_type",
      occurredAt: "occurred_at",
      notificationId: "notification_id",
    },
  });
