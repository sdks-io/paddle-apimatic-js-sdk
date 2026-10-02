import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of change that's scheduled to be applied to this subscription. */
export const ScheduledChangeAction = {
  /**
   * "cancel": { "description": "Subscription is scheduled to cancel. Its status changes to
   * `canceled` on the `effective_at` date." }
   */
  Cancel: "cancel",
  /**
   * "pause": { "description": "Subscription is scheduled to pause. Its status changes to `paused`
   * on the `effective_at` date." }
   */
  Pause: "pause",
  /**
   * "resume": { "description": "Subscription is scheduled to resume. Its status changes to `active`
   * on the `effective_at` date." }
   */
  Resume: "resume",
} as const;
export type ScheduledChangeAction =
  | (typeof ScheduledChangeAction)[keyof typeof ScheduledChangeAction]
  | (string & {});

export const scheduledChangeActionSchema: EnumSchema<ScheduledChangeAction> =
  s.enumOf<ScheduledChangeAction>(ScheduledChangeAction);
