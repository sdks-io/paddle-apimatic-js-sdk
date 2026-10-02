import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when the subscription was next scheduled to be billed at the time of
 * activation. `null` when the subscription has no next billing date — for example, a recovered
 * `past_due` subscription that is scheduled to cancel or pause.
 */
export type NextBilledAt1 = Date;

export const nextBilledAt1Schema: Schema<NextBilledAt1> = s.of<NextBilledAt1>(s.union([s.dateTime()]));
