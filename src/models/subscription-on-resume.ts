import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How Paddle should set the billing period for the subscription when resuming. If omitted, defaults
 * to `start_new_billing_period`.
 */
export const SubscriptionOnResume = {
  /**
   * "continue_existing_billing_period": { "description": "When resuming, continue the existing
   * billing period. If the customer resumes before the end date of the existing billing period,
   * there's no immediate charge. If after, an error is returned." }
   */
  ContinueExistingBillingPeriod: "continue_existing_billing_period",
  /**
   * "start_new_billing_period": { "description": "When resuming, start a new billing period. The
   * `current_billing_period.starts_at` date is set to the resume date, and Paddle immediately
   * charges the full amount for the new billing period." }
   */
  StartNewBillingPeriod: "start_new_billing_period",
} as const;
export type SubscriptionOnResume =
  | (typeof SubscriptionOnResume)[keyof typeof SubscriptionOnResume]
  | (string & {});

export const subscriptionOnResumeSchema: EnumSchema<SubscriptionOnResume> =
  s.enumOf<SubscriptionOnResume>(SubscriptionOnResume);
