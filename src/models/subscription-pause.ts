import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EffectiveFrom, effectiveFromSchema } from "./effective-from.js";
import { SubscriptionOnResume, subscriptionOnResumeSchema } from "./subscription-on-resume.js";

export type SubscriptionPause = {
  /** @default EffectiveFrom.NextBillingPeriod */
  effectiveFrom?: EffectiveFrom | null;
  /**
   * RFC 3339 datetime string of when the paused subscription should resume. Omit to pause
   * indefinitely until resumed.
   */
  resumeAt?: Date | null;
  /** @default SubscriptionOnResume.StartNewBillingPeriod */
  onResume?: SubscriptionOnResume;
};

export const subscriptionPauseSchema: Schema<SubscriptionPause> = s.object<SubscriptionPause>({
  effectiveFrom: s.defaulted(s.nullable(s.lazy(() => effectiveFromSchema)), EffectiveFrom.NextBillingPeriod),
  resumeAt: s.optionalNullable(s.dateTime()),
  onResume: s.defaulted(subscriptionOnResumeSchema, SubscriptionOnResume.StartNewBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
    resumeAt: "resume_at",
    onResume: "on_resume",
  },
});
