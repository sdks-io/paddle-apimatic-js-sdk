import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionHistoryReasonSchema,
  type SubscriptionHistoryReason,
} from "../subscription-history-reason.js";

/** Why the entry was created. Only applicable to certain actions; `null` otherwise. */
export type SubscriptionHistoryReason1 = SubscriptionHistoryReason;

export const subscriptionHistoryReason1Schema: Schema<SubscriptionHistoryReason1> =
  s.of<SubscriptionHistoryReason1>(s.union([s.lazy(() => subscriptionHistoryReasonSchema)]));
