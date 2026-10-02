import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the paused subscription should resume. Omit to pause
 * indefinitely until resumed.
 */
export type ResumeAt1 = Date;

export const resumeAt1Schema: Schema<ResumeAt1> = s.of<ResumeAt1>(s.union([s.dateTime()]));
