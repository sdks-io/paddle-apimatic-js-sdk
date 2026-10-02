import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How Paddle should handle proration calculation for changes made to a subscription or its items.
 * Required when making changes that impact billing.
 *
 * For automatically-collected subscriptions, responses may take longer than usual if a proration
 * billing mode that collects for payment immediately is used.
 */
export const ProrationBillingMode = {
  /**
   * "prorated_immediately": { "description": "Paddle calculates the prorated amount for the
   * subscription changes based on the current billing cycle, then\ncreates a transaction to collect
   * immediately." }
   */
  ProratedImmediately: "prorated_immediately",
  /**
   * "prorated_next_billing_period": { "description": "Paddle calculates the prorated amount for the
   * subscription changes based on the current billing cycle, then\nschedules them to be billed on
   * the next renewal." }
   */
  ProratedNextBillingPeriod: "prorated_next_billing_period",
  /**
   * "full_immediately": { "description": "Paddle does not calculate proration for the subscription
   * changes, creating a transaction to collect for the full\namount immediately." }
   */
  FullImmediately: "full_immediately",
  /**
   * "full_next_billing_period": { "description": "Paddle does not calculate proration for the
   * subscription changes, scheduling for the full amount for the changes\nto be billed on the next
   * renewal." }
   */
  FullNextBillingPeriod: "full_next_billing_period",
  /** "do_not_bill": { "description": "Paddle does not bill for the subscription changes." } */
  DoNotBill: "do_not_bill",
} as const;
export type ProrationBillingMode =
  | (typeof ProrationBillingMode)[keyof typeof ProrationBillingMode]
  | (string & {});

export const prorationBillingModeSchema: EnumSchema<ProrationBillingMode> =
  s.enumOf<ProrationBillingMode>(ProrationBillingMode);
