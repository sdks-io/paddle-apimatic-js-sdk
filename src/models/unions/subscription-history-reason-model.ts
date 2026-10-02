import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionHistoryReasonSchema,
  type SubscriptionHistoryReason,
} from "../subscription-history-reason.js";

/** Why the entry was created. Only applicable to certain actions; `null` otherwise. */
export type SubscriptionHistoryReasonModel = SubscriptionHistoryReason;

export const subscriptionHistoryReasonModelSchema: Schema<SubscriptionHistoryReasonModel> =
  s.of<SubscriptionHistoryReasonModel>(s.union([s.lazy(() => subscriptionHistoryReasonSchema)]));
