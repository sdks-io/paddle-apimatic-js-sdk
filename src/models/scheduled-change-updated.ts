import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionScheduledChangeSchema,
  type SubscriptionScheduledChange,
} from "./subscription-scheduled-change.js";

/** Details specific to `subscription_scheduled_change_updated` actions. */
export type ScheduledChangeUpdated = {
  /** What happened on the subscription. @default "subscription_scheduled_change_updated" */
  action?: "subscription_scheduled_change_updated";
  /**
   * Details of the updated scheduled change on the subscription. This is what the scheduled change
   * was changed to.
   */
  scheduledChange: SubscriptionScheduledChange;
};

export const scheduledChangeUpdatedSchema: Schema<ScheduledChangeUpdated> = s.object<ScheduledChangeUpdated>({
  action: s.defaulted(
    s.literal("subscription_scheduled_change_updated"),
    "subscription_scheduled_change_updated",
  ),
  scheduledChange: subscriptionScheduledChangeSchema,
  _keysMap: {
    scheduledChange: "scheduled_change",
  },
});
