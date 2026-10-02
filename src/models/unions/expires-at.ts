import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this discount expires. Discount can no longer be redeemed after
 * this date has elapsed. `null` if this discount can be redeemed forever.
 *
 * Expired discounts can't be redeemed against transactions or checkouts, but can be applied when
 * updating subscriptions.
 */
export type ExpiresAt = Date;

export const expiresAtSchema: Schema<ExpiresAt> = s.of<ExpiresAt>(s.union([s.dateTime()]));
