import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { notificationSchema, type Notification } from "./notification.js";

export type NotificationsResponse1 = {
  /** Represents a notification entity. */
  data: Notification;
  /** Information about this response. */
  meta: Meta;
};

export const notificationsResponse1Schema: Schema<NotificationsResponse1> = s.object<NotificationsResponse1>({
  data: notificationSchema,
  meta: metaSchema,
});
