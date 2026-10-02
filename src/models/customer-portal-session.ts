import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerPortalSessionUrlsSchema,
  type CustomerPortalSessionUrls,
} from "./customer-portal-session-urls.js";

/** Represents a customer portal session. */
export type CustomerPortalSession = {
  id: string;
  /** Paddle ID of the customer that this customer portal sessions is for, prefixed with `ctm_`. */
  customerId: string;
  /**
   * Authenticated customer portal deep links. For security, the `token` appended to each link is
   * temporary. You shouldn't store these links.
   */
  urls: CustomerPortalSessionUrls;
  /** RFC 3339 datetime string of when this customer portal session was created. */
  createdAt: Date;
};

export const customerPortalSessionSchema: Schema<CustomerPortalSession> = s.object<CustomerPortalSession>({
  id: s.string(),
  customerId: s.string(),
  urls: customerPortalSessionUrlsSchema,
  createdAt: s.dateTime(),
  _keysMap: {
    customerId: "customer_id",
    createdAt: "created_at",
  },
});
