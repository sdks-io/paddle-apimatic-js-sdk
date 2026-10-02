import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { SubscriptionOnResume, subscriptionOnResumeSchema } from "./subscription-on-resume.js";
import { effectiveFrom1Schema, type EffectiveFrom1 } from "./unions/effective-from1.js";
import { resumeAt1Schema, type ResumeAt1 } from "./unions/resume-at1.js";

export type SubscriptionPause = {
  effectiveFrom?: EffectiveFrom1;
  /**
   * RFC 3339 datetime string of when the paused subscription should resume. Omit to pause
   * indefinitely until resumed.
   */
  resumeAt?: ResumeAt1;
  /** @default SubscriptionOnResume.StartNewBillingPeriod */
  onResume?: SubscriptionOnResume;
};

export const subscriptionPauseSchema: Schema<SubscriptionPause> = s.object<SubscriptionPause>({
  effectiveFrom: s.optional(s.lazy(() => effectiveFrom1Schema)),
  resumeAt: s.optional(s.lazy(() => resumeAt1Schema)),
  onResume: s.defaulted(subscriptionOnResumeSchema, SubscriptionOnResume.StartNewBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
    resumeAt: "resume_at",
    onResume: "on_resume",
  },
});
