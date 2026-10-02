import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this simulation was last run. `null` until run. Set
 * automatically by Paddle.
 */
export type LastRunAt = Date;

export const lastRunAtSchema: Schema<LastRunAt> = s.of<LastRunAt>(s.union([s.dateTime()]));
