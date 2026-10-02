import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "../time-period.js";

/**
 * Time period that this transaction is for. Set automatically by Paddle for subscription renewals
 * to describe the period that charges are for.
 */
export type BillingPeriod = TimePeriod;

export const billingPeriodSchema: Schema<BillingPeriod> = s.of<BillingPeriod>(
  s.union([s.lazy(() => timePeriodSchema)]),
);
