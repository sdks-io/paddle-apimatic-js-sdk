import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type SubscriptionsResponse = {
  data: Subscription[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const subscriptionsResponseSchema: Schema<SubscriptionsResponse> = s.object<SubscriptionsResponse>({
  data: s.array(s.lazy(() => subscriptionSchema)),
  meta: paginatedMetaSchema,
});
