import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { subscriptionPreviewSchema, type SubscriptionPreview } from "./subscription-preview.js";

export type SubscriptionsPreviewResponse = {
  /** Represents a subscription preview when previewing a subscription. */
  data: SubscriptionPreview;
  /** Information about this response. */
  meta: Meta;
};

export const subscriptionsPreviewResponseSchema: Schema<SubscriptionsPreviewResponse> =
  s.object<SubscriptionsPreviewResponse>({
    data: subscriptionPreviewSchema,
    meta: metaSchema,
  });
