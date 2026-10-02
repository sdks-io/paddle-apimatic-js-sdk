import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerPortalSessionGeneralUrlsSchema,
  type CustomerPortalSessionGeneralUrls,
} from "./customer-portal-session-general-urls.js";
import {
  customerPortalSessionSubscriptionUrlsSchema,
  type CustomerPortalSessionSubscriptionUrls,
} from "./customer-portal-session-subscription-urls.js";

/**
 * Authenticated customer portal deep links. For security, the `token` appended to each link is
 * temporary. You shouldn't store these links.
 */
export type CustomerPortalSessionUrls = {
  /** Authenticated customer portal deep links that aren't associated with a specific entity. */
  general: CustomerPortalSessionGeneralUrls;
  /**
   * List of generated authenticated customer portal deep links for the subscriptions passed in the
   * `subscription_ids` array in the request.
   *
   * If subscriptions are paused or canceled, links open the overview page for a subscription.
   *
   * Empty if no subscriptions passed in the request.
   */
  subscriptions?: CustomerPortalSessionSubscriptionUrls[];
};

export const customerPortalSessionUrlsSchema: Schema<CustomerPortalSessionUrls> =
  s.object<CustomerPortalSessionUrls>({
    general: customerPortalSessionGeneralUrlsSchema,
    subscriptions: s.optional(s.array(s.lazy(() => customerPortalSessionSubscriptionUrlsSchema))),
  });
