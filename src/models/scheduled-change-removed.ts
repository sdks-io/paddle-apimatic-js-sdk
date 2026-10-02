import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionScheduledChangeSchema,
  type SubscriptionScheduledChange,
} from "./subscription-scheduled-change.js";

/** Details specific to `subscription_scheduled_change_removed` actions. */
export type ScheduledChangeRemoved = {
  /** What happened on the subscription. @default "subscription_scheduled_change_removed" */
  action?: "subscription_scheduled_change_removed";
  /** Details of the scheduled change that was removed from the subscription. */
  scheduledChange: SubscriptionScheduledChange;
};

export const scheduledChangeRemovedSchema: Schema<ScheduledChangeRemoved> = s.object<ScheduledChangeRemoved>({
  action: s.defaulted(
    s.literal("subscription_scheduled_change_removed"),
    "subscription_scheduled_change_removed",
  ),
  scheduledChange: subscriptionScheduledChangeSchema,
  _keysMap: {
    scheduledChange: "scheduled_change",
  },
});
