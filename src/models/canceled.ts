import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryCanceledEffectiveFromSchema,
  type SubscriptionHistoryCanceledEffectiveFrom,
} from "./subscription-history-canceled-effective-from.js";

/** Details specific to `subscription_canceled` actions. */
export type Canceled = {
  /** What happened on the subscription. @default "subscription_canceled" */
  action?: "subscription_canceled";
  /** Whether the subscription was canceled immediately, or scheduled to cancel. */
  effectiveFrom: SubscriptionHistoryCanceledEffectiveFrom | null;
};

export const canceledSchema: Schema<Canceled> = s.object<Canceled>({
  action: s.defaulted(s.literal("subscription_canceled"), "subscription_canceled"),
  effectiveFrom: s.nullable(s.lazy(() => subscriptionHistoryCanceledEffectiveFromSchema)),
  _keysMap: {
    effectiveFrom: "effective_from",
  },
});
