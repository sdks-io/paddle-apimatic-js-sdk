import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subscriptionOnResumeSchema, type SubscriptionOnResume } from "./subscription-on-resume.js";
import { subscriptionStatusSchema, type SubscriptionStatus } from "./subscription-status.js";

/** Details specific to `subscription_resumed` actions. */
export type Resumed = {
  /** What happened on the subscription. @default "subscription_resumed" */
  action?: "subscription_resumed";
  /** The status of the subscription after resuming. */
  status: SubscriptionStatus;
  /**
   * How the subscription was resumed. Indicates whether a new billing period was started or the
   * existing one continued.
   */
  onResume: SubscriptionOnResume;
};

export const resumedSchema: Schema<Resumed> = s.object<Resumed>({
  action: s.defaulted(s.literal("subscription_resumed"), "subscription_resumed"),
  status: subscriptionStatusSchema,
  onResume: subscriptionOnResumeSchema,
  _keysMap: {
    onResume: "on_resume",
  },
});
