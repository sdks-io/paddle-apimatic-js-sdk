import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this subscription was paused. Set automatically by Paddle when
 * the pause subscription operation is used. `null` if not paused.
 */
export type PausedAt = Date;

export const pausedAtSchema: Schema<PausedAt> = s.of<PausedAt>(s.union([s.dateTime()]));
