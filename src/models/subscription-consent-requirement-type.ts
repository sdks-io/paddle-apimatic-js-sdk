import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of consent required for successful renewal. */
export const SubscriptionConsentRequirementType = {
  /** "trial_ending": { "description": "Consent required because the trial period is ending." } */
  TrialEnding: "trial_ending",
  /**
   * "introductory_discount_ending": { "description": "Consent required because an initial discount
   * is ending." }
   */
  IntroductoryDiscountEnding: "introductory_discount_ending",
} as const;
export type SubscriptionConsentRequirementType =
  | (typeof SubscriptionConsentRequirementType)[keyof typeof SubscriptionConsentRequirementType]
  | (string & {});

export const subscriptionConsentRequirementTypeSchema: EnumSchema<SubscriptionConsentRequirementType> =
  s.enumOf<SubscriptionConsentRequirementType>(SubscriptionConsentRequirementType);
