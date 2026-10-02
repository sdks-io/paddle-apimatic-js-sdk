import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timePeriod1Schema, type TimePeriod1 } from "./time-period1.js";

/**
 * How proration was calculated for this item. Populated when a transaction is created from a
 * subscription change, where `proration_billing_mode` was `prorated_immediately` or
 * `prorated_next_billing_period`. Set automatically by Paddle.
 */
export type Proration1 = {
  /** Rate used to calculate proration. */
  rate: string;
  /** Billing period that proration is based on. */
  billingPeriod: TimePeriod1;
};

export const proration1Schema: Schema<Proration1> = s.object<Proration1>({
  rate: s.string(),
  billingPeriod: timePeriod1Schema,
  _keysMap: {
    billingPeriod: "billing_period",
  },
});
