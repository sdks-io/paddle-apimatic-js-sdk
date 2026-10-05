import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Customer portal deep links for this subscription.
 *
 * Authenticated links are only returned when your API key has Customer portal session (Write)
 * permission. For security, the `token` appended to authenticated links is temporary. You shouldn't
 * store them.
 */
export type SubscriptionManagementUrls = {
  /**
   * Link to the page for this subscription in the customer portal with the payment method update
   * form pre-opened. Use as part of workflows to let customers update their payment details. `null`
   * for manually-collected subscriptions.
   */
  updatePaymentMethod: string | null;
  /**
   * Link to the page for this subscription in the customer portal with the subscription
   * cancellation form pre-opened. Use as part of cancel subscription workflows.
   */
  cancel: string;
};

export const subscriptionManagementUrlsSchema: Schema<SubscriptionManagementUrls> =
  s.object<SubscriptionManagementUrls>({
    updatePaymentMethod: s.nullable(s.string()),
    cancel: s.string(),
    _keysMap: {
      updatePaymentMethod: "update_payment_method",
    },
  });
