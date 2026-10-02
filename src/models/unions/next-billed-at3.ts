import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of the updated billing date. `null` when the subscription has no
 * upcoming billing date, for example when a scheduled pause or cancellation means it will not be
 * billed again.
 */
export type NextBilledAt3 = Date;

export const nextBilledAt3Schema: Schema<NextBilledAt3> = s.of<NextBilledAt3>(s.union([s.dateTime()]));
