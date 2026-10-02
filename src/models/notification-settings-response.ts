import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationSettingSchema, type NotificationSetting } from "./notification-setting.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type NotificationSettingsResponse = {
  data: NotificationSetting[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const notificationSettingsResponseSchema: Schema<NotificationSettingsResponse> =
  s.object<NotificationSettingsResponse>({
    data: s.array(s.lazy(() => notificationSettingSchema)),
    meta: paginatedMetaSchema,
  });
