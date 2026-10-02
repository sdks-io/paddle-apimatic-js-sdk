import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceTrialDuration1Schema, type PriceTrialDuration1 } from "../price-trial-duration1.js";

/**
 * Trial period for the product related to this price. The billing cycle begins once the trial
 * period is over. `null` for no trial period. Requires `billing_cycle`. If omitted, defaults to
 * `null`.
 */
export type TrialPeriod2 = PriceTrialDuration1;

export const trialPeriod2Schema: Schema<TrialPeriod2> = s.of<TrialPeriod2>(
  s.union([s.lazy(() => priceTrialDuration1Schema)]),
);
