import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeNameSchema, type EventTypeName } from "./event-type-name.js";
import { notificationOriginSchema, type NotificationOrigin } from "./notification-origin.js";
import { notificationPayloadSchema, type NotificationPayload } from "./notification-payload.js";
import { notificationStatusSchema, type NotificationStatus } from "./notification-status.js";

/** Represents a notification entity. */
export type Notification = {
  id: string;
  type: EventTypeName;
  status: NotificationStatus;
  /** Notification payload. Includes the new or changed event. */
  payload: NotificationPayload;
  /** RFC 3339 datetime string of when this notification occurred. */
  occurredAt: Date;
  /**
   * RFC 3339 datetime string of when this notification was delivered. `null` if not yet delivered
   * successfully.
   */
  deliveredAt?: Date | null;
  /** RFC 3339 datetime string of when this notification was replayed. `null` if not replayed. */
  replayedAt?: Date | null;
  origin: NotificationOrigin;
  /** RFC 3339 datetime string of when this notification was last attempted. */
  lastAttemptAt?: Date | null;
  /** RFC 3339 datetime string of when this notification is scheduled to be retried. */
  retryAt?: Date | null;
  /**
   * How many times delivery of this notification has been attempted. Automatically incremented by
   * Paddle after an attempt.
   */
  timesAttempted: number;
  notificationSettingId: string;
};

export const notificationSchema: Schema<Notification> = s.object<Notification>({
  id: s.string(),
  type: eventTypeNameSchema,
  status: notificationStatusSchema,
  payload: notificationPayloadSchema,
  occurredAt: s.dateTime(),
  deliveredAt: s.optionalNullable(s.dateTime()),
  replayedAt: s.optionalNullable(s.dateTime()),
  origin: notificationOriginSchema,
  lastAttemptAt: s.optionalNullable(s.dateTime()),
  retryAt: s.optionalNullable(s.dateTime()),
  timesAttempted: s.int(),
  notificationSettingId: s.string(),
  _keysMap: {
    occurredAt: "occurred_at",
    deliveredAt: "delivered_at",
    replayedAt: "replayed_at",
    lastAttemptAt: "last_attempt_at",
    retryAt: "retry_at",
    timesAttempted: "times_attempted",
    notificationSettingId: "notification_setting_id",
  },
});
