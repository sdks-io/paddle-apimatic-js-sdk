import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionScheduledChangeSchema,
  type SubscriptionScheduledChange,
} from "../subscription-scheduled-change.js";

/**
 * Change that's scheduled to be applied to a subscription. Use the pause subscription, cancel
 * subscription, and resume subscription operations to create scheduled changes. `null` if no
 * scheduled changes.
 */
export type ScheduledChange = SubscriptionScheduledChange;

export const scheduledChangeSchema: Schema<ScheduledChange> = s.of<ScheduledChange>(
  s.union([s.lazy(() => subscriptionScheduledChangeSchema)]),
);
