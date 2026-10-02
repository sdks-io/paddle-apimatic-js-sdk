import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When the customer was or will be billed for the one-off charge. */
export const SubscriptionHistoryOneOffChargeAppliedEffectiveFrom = {
  /**
   * "immediately": { "description": "The one-off charge was billed at the time of this action — a
   * transaction was created right away." }
   */
  Immediately: "immediately",
  /**
   * "next_billing_period": { "description": "The one-off charge was added to the transaction
   * created when the subscription next renews. The customer will be billed for it as part of that
   * renewal." }
   */
  NextBillingPeriod: "next_billing_period",
} as const;
export type SubscriptionHistoryOneOffChargeAppliedEffectiveFrom =
  | (typeof SubscriptionHistoryOneOffChargeAppliedEffectiveFrom)[keyof typeof SubscriptionHistoryOneOffChargeAppliedEffectiveFrom]
  | (string & {});

export const subscriptionHistoryOneOffChargeAppliedEffectiveFromSchema: EnumSchema<SubscriptionHistoryOneOffChargeAppliedEffectiveFrom> =
  s.enumOf<SubscriptionHistoryOneOffChargeAppliedEffectiveFrom>(
    SubscriptionHistoryOneOffChargeAppliedEffectiveFrom,
  );
