import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where notifications should be sent for this destination. */
export const NotificationSettingType = {
  /** "email": { "description": "Deliver to an email address." } */
  Email: "email",
  /** "url": { "description": "Deliver to a webhook endpoint." } */
  Url: "url",
} as const;
export type NotificationSettingType =
  | (typeof NotificationSettingType)[keyof typeof NotificationSettingType]
  | (string & {});

export const notificationSettingTypeSchema: EnumSchema<NotificationSettingType> =
  s.enumOf<NotificationSettingType>(NotificationSettingType);
