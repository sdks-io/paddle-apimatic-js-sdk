import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduledChangeActionQuery = {
  /** "cancel": { "description": "Return subscriptions with a scheduled change to cancel." } */
  Cancel: "cancel",
  /** "pause": { "description": "Return subscriptions with a scheduled change to pause." } */
  Pause: "pause",
  /**
   * "resume": { "description": "Return subscriptions with a scheduled change to resume. Only
   * returned for paused subscriptions." }
   */
  Resume: "resume",
  /** "none": { "description": "Return subscriptions that do not have a scheduled change." } */
  None: "none",
} as const;
export type ScheduledChangeActionQuery =
  | (typeof ScheduledChangeActionQuery)[keyof typeof ScheduledChangeActionQuery]
  | (string & {});

export const scheduledChangeActionQuerySchema: EnumSchema<ScheduledChangeActionQuery> =
  s.enumOf<ScheduledChangeActionQuery>(ScheduledChangeActionQuery);
