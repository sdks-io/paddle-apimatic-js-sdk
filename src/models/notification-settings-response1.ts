import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { notificationSettingSchema, type NotificationSetting } from "./notification-setting.js";

export type NotificationSettingsResponse1 = {
  /** Represents a notification destination. */
  data: NotificationSetting;
  /** Information about this response. */
  meta: Meta;
};

export const notificationSettingsResponse1Schema: Schema<NotificationSettingsResponse1> =
  s.object<NotificationSettingsResponse1>({
    data: notificationSettingSchema,
    meta: metaSchema,
  });
