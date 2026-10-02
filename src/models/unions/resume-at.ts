import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when a paused subscription should resume. Only used for `pause`
 * scheduled changes.
 */
export type ResumeAt = Date;

export const resumeAtSchema: Schema<ResumeAt> = s.of<ResumeAt>(s.union([s.dateTime()]));
