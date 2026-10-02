import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this API key expires. */
export type ExpiresAt11 = Date;

export const expiresAt11Schema: Schema<ExpiresAt11> = s.of<ExpiresAt11>(s.union([s.dateTime()]));
