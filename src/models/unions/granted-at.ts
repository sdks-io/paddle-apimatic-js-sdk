import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the customer granted their consent. `null` if not yet granted.
 */
export type GrantedAt = Date;

export const grantedAtSchema: Schema<GrantedAt> = s.of<GrantedAt>(s.union([s.dateTime()]));
