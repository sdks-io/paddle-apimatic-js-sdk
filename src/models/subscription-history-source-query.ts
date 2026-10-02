import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionHistorySourceQuery = {
  /**
   * "system": { "description": "Return history entries where the source is `system`. The entry
   * originated from an internal system process." }
   */
  System: "system",
  /**
   * "api": { "description": "Return history entries where the source is `api`. The entry originated
   * from the Paddle API." }
   */
  Api: "api",
  /**
   * "dashboard": { "description": "Return history entries where the source is `dashboard`. The
   * entry originated from the dashboard." }
   */
  Dashboard: "dashboard",
  /**
   * "customer_portal": { "description": "Return history entries where the source is
   * `customer_portal`. The entry originated from the customer portal." }
   */
  CustomerPortal: "customer_portal",
  /**
   * "support_bot": { "description": "Return history entries where the source is `support_bot`. The
   * entry originated from Paddle.net." }
   */
  SupportBot: "support_bot",
  /**
   * "retain": { "description": "Return history entries where the source is `retain`. The entry
   * originated from Paddle Retain." }
   */
  Retain: "retain",
  /**
   * "checkout": { "description": "Return history entries where the source is `checkout`. The entry
   * originated from Paddle Checkout." }
   */
  Checkout: "checkout",
  /**
   * "external_provider": { "description": "Return history entries where the source is
   * `external_provider`. The entry originated from an import from an external provider." }
   */
  ExternalProvider: "external_provider",
  /**
   * "paddle_classic": { "description": "Return history entries where the source is
   * `paddle_classic`. The entry originated from an import from Paddle Classic." }
   */
  PaddleClassic: "paddle_classic",
  /**
   * "unknown": { "description": "Return history entries where the source is `unknown`. The entry
   * happened before history recording began and its source couldn't be determined." }
   */
  Unknown: "unknown",
} as const;
export type SubscriptionHistorySourceQuery =
  | (typeof SubscriptionHistorySourceQuery)[keyof typeof SubscriptionHistorySourceQuery]
  | (string & {});

export const subscriptionHistorySourceQuerySchema: EnumSchema<SubscriptionHistorySourceQuery> =
  s.enumOf<SubscriptionHistorySourceQuery>(SubscriptionHistorySourceQuery);
