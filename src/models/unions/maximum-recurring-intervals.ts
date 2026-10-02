import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Number of subscription billing periods that this discount recurs for. Requires `recur`. `null` if
 * this discount recurs forever.
 *
 * Subscription renewals, midcycle changes, and one-time charges billed to a subscription aren't
 * considered a redemption. `times_used` is not incremented in these cases.
 */
export type MaximumRecurringIntervals = number;

export const maximumRecurringIntervalsSchema: Schema<MaximumRecurringIntervals> =
  s.of<MaximumRecurringIntervals>(s.union([s.number()]));
