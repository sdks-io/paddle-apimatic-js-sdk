import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the subscription was next scheduled to be billed after the
 * billing cycle was updated. `null` if the subscription has no next billing date (for example,
 * paused without a scheduled resume).
 */
export type NextBilledAt2 = Date;

export const nextBilledAt2Schema: Schema<NextBilledAt2> = s.of<NextBilledAt2>(s.union([s.dateTime()]));
