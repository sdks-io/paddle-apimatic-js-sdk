import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this notification. */
export const NotificationStatus = {
  /** "not_attempted": { "description": "Paddle hasn't yet tried to deliver this notification." } */
  NotAttempted: "not_attempted",
  /**
   * "needs_retry": { "description": "Paddle tried to deliver this notification, but it failed. It's
   * scheduled to be retried." }
   */
  NeedsRetry: "needs_retry",
  /** "delivered": { "description": "Paddle delivered this notification successfully." } */
  Delivered: "delivered",
  /**
   * "failed": { "description": "Paddle tried to deliver this notification, but all attempts failed.
   * It's not scheduled to be retried." }
   */
  Failed: "failed",
} as const;
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus] | (string & {});

export const notificationStatusSchema: EnumSchema<NotificationStatus> =
  s.enumOf<NotificationStatus>(NotificationStatus);
