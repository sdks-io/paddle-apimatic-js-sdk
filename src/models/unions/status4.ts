import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "../subscription-status.js";

/**
 * Status of the subscription when it was created. `null` if created before history recording began
 * and this couldn't be determined.
 */
export type Status4 = SubscriptionStatus;

export const status4Schema: Schema<Status4> = s.of<Status4>(
  s.union([s.lazy(() => subscriptionStatusSchema)]),
);
