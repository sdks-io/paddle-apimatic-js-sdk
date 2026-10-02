import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationSchema, type Notification } from "./notification.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type NotificationsResponse = {
  data: Notification[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const notificationsResponseSchema: Schema<NotificationsResponse> = s.object<NotificationsResponse>({
  data: s.array(s.lazy(() => notificationSchema)),
  meta: paginatedMetaSchema,
});
