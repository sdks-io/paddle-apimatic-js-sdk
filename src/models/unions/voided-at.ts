import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when consent was voided or no longer required. `null` if not voided.
 */
export type VoidedAt = Date;

export const voidedAtSchema: Schema<VoidedAt> = s.of<VoidedAt>(s.union([s.dateTime()]));
