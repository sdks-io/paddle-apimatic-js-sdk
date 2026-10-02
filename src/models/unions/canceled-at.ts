import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this subscription was canceled. Set automatically by Paddle when
 * the cancel subscription operation is used. `null` if not canceled.
 */
export type CanceledAt = Date;

export const canceledAtSchema: Schema<CanceledAt> = s.of<CanceledAt>(s.union([s.dateTime()]));
