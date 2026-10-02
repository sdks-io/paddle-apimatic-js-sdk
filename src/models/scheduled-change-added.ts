import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionScheduledChangeSchema,
  type SubscriptionScheduledChange,
} from "./subscription-scheduled-change.js";

/** Details specific to `subscription_scheduled_change_added` actions. */
export type ScheduledChangeAdded = {
  /** What happened on the subscription. @default "subscription_scheduled_change_added" */
  action?: "subscription_scheduled_change_added";
  /** Details of the scheduled change that was added to the subscription. */
  scheduledChange: SubscriptionScheduledChange;
};

export const scheduledChangeAddedSchema: Schema<ScheduledChangeAdded> = s.object<ScheduledChangeAdded>({
  action: s.defaulted(
    s.literal("subscription_scheduled_change_added"),
    "subscription_scheduled_change_added",
  ),
  scheduledChange: subscriptionScheduledChangeSchema,
  _keysMap: {
    scheduledChange: "scheduled_change",
  },
});
