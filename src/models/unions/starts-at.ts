import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this discount was first applied. `null` for canceled
 * subscriptions where a discount was redeemed but never applied to a transaction.
 */
export type StartsAt = Date;

export const startsAtSchema: Schema<StartsAt> = s.of<StartsAt>(s.union([s.dateTime()]));
