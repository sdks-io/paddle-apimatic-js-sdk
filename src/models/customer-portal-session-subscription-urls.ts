import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerPortalSessionSubscriptionUrls = {
  /** Paddle ID of the subscription that the authenticated customer portal deep links are for. */
  id: string;
  /**
   * Link to the page for this subscription in the customer portal with the subscription
   * cancellation form pre-opened. Use as part of cancel subscription workflows.
   */
  cancelSubscription: string;
  /**
   * Link to the page for this subscription in the customer portal with the payment method update
   * form pre-opened. Use as part of workflows to let customers update their payment details.
   *
   * If a manually-collected subscription, opens the overview page for this subscription.
   */
  updateSubscriptionPaymentMethod: string;
};

export const customerPortalSessionSubscriptionUrlsSchema: Schema<CustomerPortalSessionSubscriptionUrls> =
  s.object<CustomerPortalSessionSubscriptionUrls>({
    id: s.string(),
    cancelSubscription: s.string(),
    updateSubscriptionPaymentMethod: s.string(),
    _keysMap: {
      cancelSubscription: "cancel_subscription",
      updateSubscriptionPaymentMethod: "update_subscription_payment_method",
    },
  });
