import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this consent requirement. */
export const SubscriptionConsentRequirementStatus = {
  /**
   * "pending": { "description": "Consent not yet granted. Subscription is canceled on next
   * renewal." }
   */
  Pending: "pending",
  /** "granted": { "description": "Consent granted. Subscription renews normally." } */
  Granted: "granted",
  /**
   * "voided": { "description": "Consent voided. Consent requirement is no longer applicable, either
   * because the consent is no longer required, or another consent requirement has replaced it." }
   */
  Voided: "voided",
} as const;
export type SubscriptionConsentRequirementStatus =
  | (typeof SubscriptionConsentRequirementStatus)[keyof typeof SubscriptionConsentRequirementStatus]
  | (string & {});

export const subscriptionConsentRequirementStatusSchema: EnumSchema<SubscriptionConsentRequirementStatus> =
  s.enumOf<SubscriptionConsentRequirementStatus>(SubscriptionConsentRequirementStatus);
