import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this notification was last attempted. */
export type LastAttemptAt = Date;

export const lastAttemptAtSchema: Schema<LastAttemptAt> = s.of<LastAttemptAt>(s.union([s.dateTime()]));
