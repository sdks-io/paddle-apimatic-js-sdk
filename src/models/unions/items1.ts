import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionItemCreateWithPriceIdSchema,
  type SubscriptionItemCreateWithPriceId,
} from "../subscription-item-create-with-price-id.js";

/**
 * Items to include on the simulated subscription. Only existing products and prices can be
 * simulated. Non-catalog items aren't supported. At least one recurring price must be provided.
 */
export type Items1 = SubscriptionItemCreateWithPriceId[];

export const items1Schema: Schema<Items1> = s.of<Items1>(
  s.union([s.array(s.lazy(() => subscriptionItemCreateWithPriceIdSchema))]),
);
