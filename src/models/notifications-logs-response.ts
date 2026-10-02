import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationLogSchema, type NotificationLog } from "./notification-log.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type NotificationsLogsResponse = {
  data: NotificationLog[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const notificationsLogsResponseSchema: Schema<NotificationsLogsResponse> =
  s.object<NotificationsLogsResponse>({
    data: s.array(s.lazy(() => notificationLogSchema)),
    meta: paginatedMetaSchema,
  });
