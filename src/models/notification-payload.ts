import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

/** Notification payload. Includes the new or changed event. */
export type NotificationPayload = {
  eventId: string;
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** New or changed entity. */
  data: Record<string, unknown>;
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId?: string;
};

export const notificationPayloadSchema: Schema<NotificationPayload> = s.object<NotificationPayload>({
  eventId: s.string(),
  eventType: eventTypeNameSchema,
  occurredAt: s.dateTime(),
  data: s.record(s.string(), s.unknown()),
  notificationId: s.optional(s.string()),
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    occurredAt: "occurred_at",
    notificationId: "notification_id",
  },
});
