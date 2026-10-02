import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionHistoryPausedEffectiveFromSchema,
  type SubscriptionHistoryPausedEffectiveFrom,
} from "./subscription-history-paused-effective-from.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";

/** Details specific to `subscription_paused` actions. */
export type Paused = {
  /** What happened on the subscription. @default "subscription_paused" */
  action?: "subscription_paused";
  /** Whether the subscription was paused immediately, or scheduled to pause. */
  effectiveFrom: SubscriptionHistoryPausedEffectiveFrom;
  /** The status of the subscription after pausing. */
  status: SubscriptionStatus;
};

export const pausedSchema: Schema<Paused> = s.object<Paused>({
  action: s.defaulted(s.literal("subscription_paused"), "subscription_paused"),
  effectiveFrom: subscriptionHistoryPausedEffectiveFromSchema,
  status: subscriptionStatusSchema,
  _keysMap: {
    effectiveFrom: "effective_from",
  },
});
