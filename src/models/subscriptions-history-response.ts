import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";
import { subscriptionHistorySchema, type SubscriptionHistory } from "./subscription-history.js";

export type SubscriptionsHistoryResponse = {
  data: SubscriptionHistory[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const subscriptionsHistoryResponseSchema: Schema<SubscriptionsHistoryResponse> =
  s.object<SubscriptionsHistoryResponse>({
    data: s.array(s.lazy(() => subscriptionHistorySchema)),
    meta: paginatedMetaSchema,
  });
