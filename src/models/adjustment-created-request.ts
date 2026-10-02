import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";

export type AdjustmentCreatedRequest = {
  /** Unique Paddle ID for this event, prefixed with `evt_`. */
  eventId: string;
  /** Type of event sent by Paddle, in the format `entity.event_type`. */
  eventType: EventTypeName;
  /** RFC 3339 datetime string of when this event occurred. */
  occurredAt: Date;
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId: string;
  /** New or changed entity. */
  data: Data3;
};

export const adjustmentCreatedRequestSchema: Schema<AdjustmentCreatedRequest> =
  s.object<AdjustmentCreatedRequest>({
    eventId: s.string(),
    eventType: eventTypeNameSchema,
    occurredAt: s.dateTime(),
    notificationId: s.string(),
    data: data3Schema,
    _keysMap: {
      eventId: "event_id",
      eventType: "event_type",
      occurredAt: "occurred_at",
      notificationId: "notification_id",
    },
  });
