import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when this transaction was marked as `billed`. `null` for transactions
 * that aren't `billed` or `completed`. Set automatically by Paddle.
 */
export type BilledAt = Date;

export const billedAtSchema: Schema<BilledAt> = s.of<BilledAt>(s.union([s.dateTime()]));
