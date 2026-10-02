import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this API key was last used (accurate to within 1 hour). `null`
 * if never used.
 */
export type LastUsedAt = Date;

export const lastUsedAtSchema: Schema<LastUsedAt> = s.of<LastUsedAt>(s.union([s.dateTime()]));
