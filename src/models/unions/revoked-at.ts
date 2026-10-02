import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** RFC 3339 datetime string of when this client-side token was revoked. `null` if not revoked. */
export type RevokedAt = Date;

export const revokedAtSchema: Schema<RevokedAt> = s.of<RevokedAt>(s.union([s.dateTime()]));
