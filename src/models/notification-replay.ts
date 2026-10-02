import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a notification replay entity. */
export type NotificationReplay = {
  /** Unique Paddle ID for this notification, prefixed with `ntf_`. */
  notificationId: string;
};

export const notificationReplaySchema: Schema<NotificationReplay> = s.object<NotificationReplay>({
  notificationId: s.string(),
  _keysMap: {
    notificationId: "notification_id",
  },
});
