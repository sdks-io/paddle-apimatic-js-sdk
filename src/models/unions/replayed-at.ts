import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this notification was replayed. `null` if not replayed. */
export type ReplayedAt = Date;

export const replayedAtSchema: Schema<ReplayedAt> = s.of<ReplayedAt>(s.union([s.dateTime()]));
