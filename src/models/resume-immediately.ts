import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { SubscriptionOnResume, subscriptionOnResumeSchema } from "./subscription-on-resume.js";
import { effectiveFrom12Schema, type EffectiveFrom12 } from "./unions/effective-from12.js";

export type ResumeImmediately = {
  /**
   * When this subscription change should take effect from. You can pass `immediately` to resume
   * immediately.
   *
   * Valid where subscriptions have the status of `paused`.
   *
   * Defaults to `immediately` if omitted.
   */
  effectiveFrom: EffectiveFrom12;
  /** @default SubscriptionOnResume.StartNewBillingPeriod */
  onResume?: SubscriptionOnResume;
};

export const resumeImmediatelySchema: Schema<ResumeImmediately> = s.object<ResumeImmediately>({
  effectiveFrom: effectiveFrom12Schema,
  onResume: s.defaulted(subscriptionOnResumeSchema, SubscriptionOnResume.StartNewBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
    onResume: "on_resume",
  },
});
