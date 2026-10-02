import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { prorationSchema, type Proration } from "../proration.js";

/**
 * How proration was calculated for this item. Populated when a transaction is created from a
 * subscription change, where `proration_billing_mode` was `prorated_immediately` or
 * `prorated_next_billing_period`. Set automatically by Paddle.
 */
export type Proration13 = Proration;

export const proration13Schema: Schema<Proration13> = s.of<Proration13>(
  s.union([s.lazy(() => prorationSchema)]),
);
