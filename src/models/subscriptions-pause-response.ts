import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionsPauseResponse = {
  /** Represents a subscription entity. */
  data: Subscription;
  /** Information about this response. */
  meta: Meta;
};

export const subscriptionsPauseResponseSchema: Schema<SubscriptionsPauseResponse> =
  s.object<SubscriptionsPauseResponse>({
    data: subscriptionSchema,
    meta: metaSchema,
  });
