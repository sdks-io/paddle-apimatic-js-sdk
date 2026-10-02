import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionOriginQuery = {
  /**
   * "api": { "description": "Return transactions where the origin is `api`. Returned transactions
   * were created by the Paddle API." }
   */
  Api: "api",
  /**
   * "subscription_charge": { "description": "Return transactions where the origin is
   * `subscription_charge`. Returned transactions were created automatically by Paddle as a result
   * of a one-time charge for a subscription." }
   */
  SubscriptionCharge: "subscription_charge",
  /**
   * "subscription_payment_method_change": { "description": "Return transactions where the origin is
   * `subscription_payment_method_change`. Returned transactions were created automatically as part
   * of updating a payment method. May be a zero value transaction." }
   */
  SubscriptionPaymentMethodChange: "subscription_payment_method_change",
  /**
   * "subscription_recurring": { "description": "Return transactions where the origin is
   * `subscription_recurring`. Returned transactions were created automatically by Paddle as a
   * result of a subscription renewal." }
   */
  SubscriptionRecurring: "subscription_recurring",
  /**
   * "subscription_update": { "description": "Return transactions where the origin is
   * `subscription_update`. Returned transactions were created automatically by Paddle as a result
   * of an update to a subscription." }
   */
  SubscriptionUpdate: "subscription_update",
  /**
   * "subscription_import": { "description": "Return transactions where the origin is
   * `subscription_import`. Returned transactions that were created automatically by Paddle as a
   * result of a subscription import." }
   */
  SubscriptionImport: "subscription_import",
  /**
   * "web": { "description": "Return transactions where the origin is `web`. Returned transactions
   * were created automatically by Paddle.js for a checkout." }
   */
  Web: "web",
} as const;
export type TransactionOriginQuery =
  | (typeof TransactionOriginQuery)[keyof typeof TransactionOriginQuery]
  | (string & {});

export const transactionOriginQuerySchema: EnumSchema<TransactionOriginQuery> =
  s.enumOf<TransactionOriginQuery>(TransactionOriginQuery);
