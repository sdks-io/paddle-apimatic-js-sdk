import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EffectiveFromImmediately, effectiveFromImmediatelySchema } from "./effective-from-immediately.js";
import { SubscriptionOnResume, subscriptionOnResumeSchema } from "./subscription-on-resume.js";

export type ResumeImmediately = {
  /**
   * When this subscription change should take effect from. You can pass `immediately` to resume
   * immediately.
   *
   * Valid where subscriptions have the status of `paused`.
   *
   * Defaults to `immediately` if omitted.
   *
   * @default EffectiveFromImmediately.Immediately
   */
  effectiveFrom?: EffectiveFromImmediately | null;
  /** @default SubscriptionOnResume.StartNewBillingPeriod */
  onResume?: SubscriptionOnResume;
};

export const resumeImmediatelySchema: Schema<ResumeImmediately> = s.object<ResumeImmediately>({
  effectiveFrom: s.defaulted(
    s.nullable(s.lazy(() => effectiveFromImmediatelySchema)),
    EffectiveFromImmediately.Immediately,
  ),
  onResume: s.defaulted(subscriptionOnResumeSchema, SubscriptionOnResume.StartNewBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
    onResume: "on_resume",
  },
});
