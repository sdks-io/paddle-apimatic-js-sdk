import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionHistoryActorTypeQuery = {
  /**
   * "customer": { "description": "Return history entries where the actor type is `customer`. The
   * action was performed by a customer." }
   */
  Customer: "customer",
  /**
   * "user": { "description": "Return history entries where the actor type is `user`. The action was
   * performed by a Paddle user account." }
   */
  User: "user",
  /**
   * "api_key": { "description": "Return history entries where the actor type is `api_key`. The
   * action was performed by an API key." }
   */
  ApiKey: "api_key",
  /**
   * "paddle_staff": { "description": "Return history entries where the actor type is
   * `paddle_staff`. The action was performed by a member of the Paddle team." }
   */
  PaddleStaff: "paddle_staff",
  /**
   * "publisher": { "description": "Return history entries where the actor type is `publisher`. The
   * action was performed by a publisher (app) acting on behalf of a user or seller." }
   */
  Publisher: "publisher",
  /**
   * "system": { "description": "Return history entries where the actor type is `system`. The action
   * was performed by an internal system process." }
   */
  System: "system",
} as const;
export type SubscriptionHistoryActorTypeQuery =
  | (typeof SubscriptionHistoryActorTypeQuery)[keyof typeof SubscriptionHistoryActorTypeQuery]
  | (string & {});

export const subscriptionHistoryActorTypeQuerySchema: EnumSchema<SubscriptionHistoryActorTypeQuery> =
  s.enumOf<SubscriptionHistoryActorTypeQuery>(SubscriptionHistoryActorTypeQuery);
