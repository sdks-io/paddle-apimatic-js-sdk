import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionConsentRequirementSchema,
  type SubscriptionConsentRequirement,
} from "./subscription-consent-requirement.js";

/** Details specific to `subscription_consent_requirement_granted` actions. */
export type ConsentRequirementGranted = {
  /** What happened on the subscription. @default "subscription_consent_requirement_granted" */
  action?: "subscription_consent_requirement_granted";
  /** Details about the consent requirement that was granted. */
  consentRequirement: SubscriptionConsentRequirement;
};

export const consentRequirementGrantedSchema: Schema<ConsentRequirementGranted> =
  s.object<ConsentRequirementGranted>({
    action: s.defaulted(
      s.literal("subscription_consent_requirement_granted"),
      "subscription_consent_requirement_granted",
    ),
    consentRequirement: subscriptionConsentRequirementSchema,
    _keysMap: {
      consentRequirement: "consent_requirement",
    },
  });
