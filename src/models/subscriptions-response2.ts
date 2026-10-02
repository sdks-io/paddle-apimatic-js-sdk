import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionsResponse2 = {
  /** Represents a subscription entity. */
  data: Subscription;
  /** Information about this response. */
  meta: Meta;
};

export const subscriptionsResponse2Schema: Schema<SubscriptionsResponse2> = s.object<SubscriptionsResponse2>({
  data: subscriptionSchema,
  meta: metaSchema,
});
