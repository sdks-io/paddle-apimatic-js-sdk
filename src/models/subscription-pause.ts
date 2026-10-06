import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { effectiveFromSchema, type EffectiveFrom } from "./effective-from.js";
import { subscriptionOnResumeSchema, type SubscriptionOnResume } from "./subscription-on-resume.js";

export type SubscriptionPause = {
  effectiveFrom?: EffectiveFrom | null;
  /**
   * RFC 3339 datetime string of when the paused subscription should resume. Omit to pause
   * indefinitely until resumed.
   */
  resumeAt?: Date | null;
  onResume?: SubscriptionOnResume;
};

export const subscriptionPauseSchema: Schema<SubscriptionPause> = s.object<SubscriptionPause>({
  effectiveFrom: s.optionalNullable(s.lazy(() => effectiveFromSchema)),
  resumeAt: s.optionalNullable(s.dateTime()),
  onResume: s.optional(s.lazy(() => subscriptionOnResumeSchema)),
  _keysMap: {
    effectiveFrom: "effective_from",
    resumeAt: "resume_at",
    onResume: "on_resume",
  },
});
