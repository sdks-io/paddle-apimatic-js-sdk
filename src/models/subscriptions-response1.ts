import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { subscriptionIncludesSchema, type SubscriptionIncludes } from "./subscription-includes.js";

export type SubscriptionsResponse1 = {
  /** Represents a subscription entity with included entities. */
  data: SubscriptionIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const subscriptionsResponse1Schema: Schema<SubscriptionsResponse1> = s.object<SubscriptionsResponse1>({
  data: subscriptionIncludesSchema,
  meta: metaSchema,
});
