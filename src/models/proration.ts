import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/**
 * How proration was calculated for this item. Populated when a transaction is created from a
 * subscription change, where `proration_billing_mode` was `prorated_immediately` or
 * `prorated_next_billing_period`. Set automatically by Paddle.
 */
export type Proration = {
  /** Rate used to calculate proration. */
  rate: string;
  /** Billing period that proration is based on. */
  billingPeriod: TimePeriod;
};

export const prorationSchema: Schema<Proration> = s.object<Proration>({
  rate: s.string(),
  billingPeriod: timePeriodSchema,
  _keysMap: {
    billingPeriod: "billing_period",
  },
});
