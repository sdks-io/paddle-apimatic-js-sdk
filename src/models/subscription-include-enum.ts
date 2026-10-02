import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionIncludeEnum = {
  /**
   * "next_transaction": { "description": "Include an object with a preview of the next transaction
   * for this subscription. May include prorated charges that aren't yet billed and one-time
   * charges." }
   */
  NextTransaction: "next_transaction",
  /**
   * "recurring_transaction_details": { "description": "Include an object with a preview of the
   * recurring transaction for this subscription. This is what the customer can expect to be billed
   * when there are no prorated or one-time charges." }
   */
  RecurringTransactionDetails: "recurring_transaction_details",
} as const;
export type SubscriptionIncludeEnum =
  | (typeof SubscriptionIncludeEnum)[keyof typeof SubscriptionIncludeEnum]
  | (string & {});

export const subscriptionIncludeEnumSchema: EnumSchema<SubscriptionIncludeEnum> =
  s.enumOf<SubscriptionIncludeEnum>(SubscriptionIncludeEnum);
