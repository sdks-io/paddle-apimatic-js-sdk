import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { durationSchema, type Duration } from "../duration.js";

/**
 * Trial period for the product related to this price. The billing cycle begins once the trial
 * period is over. `null` for no trial period. Requires `billing_cycle`.
 */
export type TrialPeriod1 = Duration;

export const trialPeriod1Schema: Schema<TrialPeriod1> = s.of<TrialPeriod1>(
  s.union([s.lazy(() => durationSchema)]),
);
