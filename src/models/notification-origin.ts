import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes how this notification was created. */
export const NotificationOrigin = {
  /** "event": { "description": "Notification created when a subscribed event occurred." } */
  Event: "event",
  /**
   * "replay": { "description": "Notification created when a notification with the origin `event`
   * was replayed." }
   */
  Replay: "replay",
} as const;
export type NotificationOrigin = (typeof NotificationOrigin)[keyof typeof NotificationOrigin] | (string & {});

export const notificationOriginSchema: EnumSchema<NotificationOrigin> =
  s.enumOf<NotificationOrigin>(NotificationOrigin);
