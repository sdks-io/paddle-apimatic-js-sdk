import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "../time-period.js";

/**
 * Current billing period for this subscription. Set automatically by Paddle based on the billing
 * cycle. `null` for `paused` and `canceled` subscriptions.
 */
export type CurrentBillingPeriod1 = TimePeriod;

export const currentBillingPeriod1Schema: Schema<CurrentBillingPeriod1> = s.of<CurrentBillingPeriod1>(
  s.union([s.lazy(() => timePeriodSchema)]),
);
