import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this subscription started. This may be different from
 * `first_billed_at` if the subscription started in trial.
 */
export type StartedAt = Date;

export const startedAtSchema: Schema<StartedAt> = s.of<StartedAt>(s.union([s.dateTime()]));
