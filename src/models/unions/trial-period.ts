import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceTrialDurationSchema, type PriceTrialDuration } from "../price-trial-duration.js";

/**
 * Trial period for the product related to this price. The billing cycle begins once the trial
 * period is over. `null` for no trial period. Requires `billing_cycle`.
 */
export type TrialPeriod = PriceTrialDuration;

export const trialPeriodSchema: Schema<TrialPeriod> = s.of<TrialPeriod>(
  s.union([s.lazy(() => priceTrialDurationSchema)]),
);
