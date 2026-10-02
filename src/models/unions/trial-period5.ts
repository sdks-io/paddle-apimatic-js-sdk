import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceTrialDuration2Schema, type PriceTrialDuration2 } from "../price-trial-duration2.js";

/**
 * Trial period for the product related to this price. The billing cycle begins once the trial
 * period is over. `null` for no trial period. Requires `billing_cycle`.
 */
export type TrialPeriod5 = PriceTrialDuration2;

export const trialPeriod5Schema: Schema<TrialPeriod5> = s.of<TrialPeriod5>(
  s.union([s.lazy(() => priceTrialDuration2Schema)]),
);
