import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this payment was captured. `null` if `status` is not `captured`.
 */
export type CapturedAt = Date;

export const capturedAtSchema: Schema<CapturedAt> = s.of<CapturedAt>(s.union([s.dateTime()]));
