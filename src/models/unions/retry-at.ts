import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this notification is scheduled to be retried. */
export type RetryAt = Date;

export const retryAtSchema: Schema<RetryAt> = s.of<RetryAt>(s.union([s.dateTime()]));
