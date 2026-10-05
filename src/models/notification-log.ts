import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a notification log entity. */
export type NotificationLog = {
  id: string;
  /** HTTP code sent by the responding server. */
  responseCode: number;
  /** Content-Type sent by the responding server. */
  responseContentType: string | null;
  /** Response body sent by the responding server. Typically empty for success responses. */
  responseBody: string;
  /** RFC 3339 datetime string of when Paddle attempted to deliver the related notification. */
  attemptedAt: Date;
};

export const notificationLogSchema: Schema<NotificationLog> = s.object<NotificationLog>({
  id: s.string(),
  responseCode: s.int(),
  responseContentType: s.nullable(s.string()),
  responseBody: s.string(),
  attemptedAt: s.dateTime(),
  _keysMap: {
    responseCode: "response_code",
    responseContentType: "response_content_type",
    responseBody: "response_body",
    attemptedAt: "attempted_at",
  },
});
