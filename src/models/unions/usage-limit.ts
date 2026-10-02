import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Maximum number of times this discount can be redeemed. This is an overall limit for this
 * discount, rather than a per-customer limit. `null` if this discount can be redeemed an unlimited
 * amount of times.
 *
 * Paddle counts a usage as a redemption on a checkout, transaction, or the initial application
 * against a subscription. Transactions created for subscription renewals, midcycle changes, and
 * one-time charges aren't considered a redemption.
 */
export type UsageLimit = number;

export const usageLimitSchema: Schema<UsageLimit> = s.of<UsageLimit>(s.union([s.number()]));
