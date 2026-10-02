import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  subscriptionTransactionWithIncludesSchema,
  type SubscriptionTransactionWithIncludes,
} from "./subscription-transaction-with-includes.js";

export type SubscriptionsUpdatePaymentMethodTransactionResponse = {
  data: SubscriptionTransactionWithIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const subscriptionsUpdatePaymentMethodTransactionResponseSchema: Schema<SubscriptionsUpdatePaymentMethodTransactionResponse> =
  s.object<SubscriptionsUpdatePaymentMethodTransactionResponse>({
    data: subscriptionTransactionWithIncludesSchema,
    meta: metaSchema,
  });
