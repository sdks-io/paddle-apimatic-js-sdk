import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { durationSchema, type Duration } from "../duration.js";

/**
 * How often this price should be charged. `null` if price is non-recurring (one-time). If omitted,
 * defaults to `null`.
 */
export type BillingCycle2 = Duration;

export const billingCycle2Schema: Schema<BillingCycle2> = s.of<BillingCycle2>(
  s.union([s.lazy(() => durationSchema)]),
);
