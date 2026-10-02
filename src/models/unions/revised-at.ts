import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * RFC 3339 datetime string of when a transaction was revised. Revisions describe an update to
 * customer information for a billed or completed transaction. `null` if not revised. Set
 * automatically by Paddle.
 */
export type RevisedAt = Date;

export const revisedAtSchema: Schema<RevisedAt> = s.of<RevisedAt>(s.union([s.dateTime()]));
