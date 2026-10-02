import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { SubscriptionOnResume, subscriptionOnResumeSchema } from "./subscription-on-resume.js";

export type ResumeOnASpecificDate = {
  /**
   * When this scheduled change should take effect from. RFC 3339 datetime string of when the
   * subscription should resume.
   *
   * Valid where subscriptions are `active` with a scheduled change to pause, or where they have the
   * status of `paused`.
   */
  effectiveFrom: Date;
  /** @default SubscriptionOnResume.StartNewBillingPeriod */
  onResume?: SubscriptionOnResume;
};

export const resumeOnASpecificDateSchema: Schema<ResumeOnASpecificDate> = s.object<ResumeOnASpecificDate>({
  effectiveFrom: s.dateTime(),
  onResume: s.defaulted(subscriptionOnResumeSchema, SubscriptionOnResume.StartNewBillingPeriod),
  _keysMap: {
    effectiveFrom: "effective_from",
    onResume: "on_resume",
  },
});
