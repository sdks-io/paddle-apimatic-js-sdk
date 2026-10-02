import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledChangeActionSchema, type ScheduledChangeAction } from "./scheduled-change-action.js";
import { resumeAtSchema, type ResumeAt } from "./unions/resume-at.js";

/**
 * Change that's scheduled to be applied to a subscription. Use the pause subscription, cancel
 * subscription, and resume subscription operations to create scheduled changes. `null` if no
 * scheduled changes.
 */
export type SubscriptionScheduledChange = {
  /** Kind of change that's scheduled to be applied to this subscription. */
  action: ScheduledChangeAction;
  /** RFC 3339 datetime string of when this scheduled change takes effect. */
  effectiveAt: Date;
  /**
   * RFC 3339 datetime string of when a paused subscription should resume. Only used for `pause`
   * scheduled changes.
   */
  resumeAt: ResumeAt;
};

export const subscriptionScheduledChangeSchema: Schema<SubscriptionScheduledChange> =
  s.object<SubscriptionScheduledChange>({
    action: scheduledChangeActionSchema,
    effectiveAt: s.dateTime(),
    resumeAt: resumeAtSchema,
    _keysMap: {
      effectiveAt: "effective_at",
      resumeAt: "resume_at",
    },
  });
