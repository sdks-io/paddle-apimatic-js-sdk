import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Why the entry was created. Only applicable to certain actions. */
export const SubscriptionHistoryReason = {
  /**
   * "cardless_trial_ended": { "description": "The subscription was a cardless trial and was
   * automatically canceled because no payment method was added. Relates to `subscription_canceled`
   * actions." }
   */
  CardlessTrialEnded: "cardless_trial_ended",
  /**
   * "import_issue": { "description": "The subscription was canceled because of an issue during
   * import. Relates to `subscription_canceled` actions." }
   */
  ImportIssue: "import_issue",
  /**
   * "missing_consent": { "description": "The subscription was automatically canceled because the
   * customer didn't grant a required consent to continue. Relates to `subscription_canceled`
   * actions." }
   */
  MissingConsent: "missing_consent",
  /**
   * "seller_request": { "description": "A Paddle user on your account requested that Paddle cancel
   * this subscription. Relates to `subscription_canceled` actions." }
   */
  SellerRequest: "seller_request",
  /**
   * "customer_request": { "description": "The customer requested that Paddle cancel this
   * subscription. Relates to `subscription_canceled` actions." }
   */
  CustomerRequest: "customer_request",
  /**
   * "chargeback": { "description": "The subscription was automatically canceled because of a
   * chargeback on one of its transactions. Relates to `subscription_canceled` actions." }
   */
  Chargeback: "chargeback",
} as const;
export type SubscriptionHistoryReason =
  | (typeof SubscriptionHistoryReason)[keyof typeof SubscriptionHistoryReason]
  | (string & {});

export const subscriptionHistoryReasonSchema: EnumSchema<SubscriptionHistoryReason> =
  s.enumOf<SubscriptionHistoryReason>(SubscriptionHistoryReason);
