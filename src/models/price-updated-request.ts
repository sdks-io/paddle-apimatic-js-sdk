import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data29Schema, type Data29 } from "./data29.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

export type PriceUpdatedRequest = {
  /** Unique Paddle ID for this event, prefixed with `evt_`. */
  eventId: string;
  /** Type of event sent by Paddle, in the format `entity.event_type`. */
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId: string;
  /** New or changed entity. */
  data: Data29;
};

export const priceUpdatedRequestSchema: Schema<PriceUpdatedRequest> = s.object<PriceUpdatedRequest>({
  eventId: s.string(),
  eventType: eventTypeNameSchema,
  occurredAt: s.dateTime(),
  notificationId: s.string(),
  data: data29Schema,
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    occurredAt: "occurred_at",
    notificationId: "notification_id",
  },
});
