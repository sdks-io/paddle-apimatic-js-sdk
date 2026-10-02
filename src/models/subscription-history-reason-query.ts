import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionHistoryReasonQuery = {
  /**
   * "cardless_trial_ended": { "description": "Return history entries where the reason is
   * `cardless_trial_ended`." }
   */
  CardlessTrialEnded: "cardless_trial_ended",
  /**
   * "import_issue": { "description": "Return history entries where the reason is `import_issue`." }
   */
  ImportIssue: "import_issue",
  /**
   * "missing_consent": { "description": "Return history entries where the reason is
   * `missing_consent`." }
   */
  MissingConsent: "missing_consent",
  /**
   * "seller_request": { "description": "Return history entries where the reason is
   * `seller_request`." }
   */
  SellerRequest: "seller_request",
  /**
   * "customer_request": { "description": "Return history entries where the reason is
   * `customer_request`." }
   */
  CustomerRequest: "customer_request",
  /** "chargeback": { "description": "Return history entries where the reason is `chargeback`." } */
  Chargeback: "chargeback",
} as const;
export type SubscriptionHistoryReasonQuery =
  | (typeof SubscriptionHistoryReasonQuery)[keyof typeof SubscriptionHistoryReasonQuery]
  | (string & {});

export const subscriptionHistoryReasonQuerySchema: EnumSchema<SubscriptionHistoryReasonQuery> =
  s.enumOf<SubscriptionHistoryReasonQuery>(SubscriptionHistoryReasonQuery);
