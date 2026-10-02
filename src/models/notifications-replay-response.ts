import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { notificationReplaySchema, type NotificationReplay } from "./notification-replay.js";

export type NotificationsReplayResponse = {
  /** Represents a notification replay entity. */
  data: NotificationReplay;
  /** Information about this response. */
  meta: Meta;
};

export const notificationsReplayResponseSchema: Schema<NotificationsReplayResponse> =
  s.object<NotificationsReplayResponse>({
    data: notificationReplaySchema,
    meta: metaSchema,
  });
