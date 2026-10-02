import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this API key was first exposed. `null` if never exposed. */
export type ExposedAt = Date;

export const exposedAtSchema: Schema<ExposedAt> = s.of<ExposedAt>(s.union([s.dateTime()]));
