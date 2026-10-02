import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionHistoryCanceledEffectiveFromSchema,
  type SubscriptionHistoryCanceledEffectiveFrom,
} from "../subscription-history-canceled-effective-from.js";

/** Whether the subscription was canceled immediately, or scheduled to cancel. */
export type EffectiveFromModel = SubscriptionHistoryCanceledEffectiveFrom;

export const effectiveFromModelSchema: Schema<EffectiveFromModel> = s.of<EffectiveFromModel>(
  s.union([s.lazy(() => subscriptionHistoryCanceledEffectiveFromSchema)]),
);
