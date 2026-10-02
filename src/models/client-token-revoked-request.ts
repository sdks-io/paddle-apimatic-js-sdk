import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data14Schema, type Data14 } from "./data14.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

export type ClientTokenRevokedRequest = {
  /** Unique Paddle ID for this event, prefixed with `evt_`. */
  eventId: string;
  /** Type of event sent by Paddle, in the format `entity.event_type`. */
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId: string;
  /** New or changed entity. */
  data: Data14;
};

export const clientTokenRevokedRequestSchema: Schema<ClientTokenRevokedRequest> =
  s.object<ClientTokenRevokedRequest>({
    eventId: s.string(),
    eventType: eventTypeNameSchema,
    occurredAt: s.dateTime(),
    notificationId: s.string(),
    data: data14Schema,
    _keysMap: {
      eventId: "event_id",
      eventType: "event_type",
      occurredAt: "occurred_at",
      notificationId: "notification_id",
    },
  });
