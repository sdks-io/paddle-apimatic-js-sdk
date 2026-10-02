import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this discount no longer applies. Where a discount has
 * `maximum_recurring_intervals`, this is the date of the last billing period where this discount
 * applies. `null` where a discount recurs forever.
 */
export type EndsAt = Date;

export const endsAtSchema: Schema<EndsAt> = s.of<EndsAt>(s.union([s.dateTime()]));
