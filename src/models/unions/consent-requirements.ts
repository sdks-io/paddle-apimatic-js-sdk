import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionConsentRequirement1Schema,
  type SubscriptionConsentRequirement1,
} from "../subscription-consent-requirement1.js";

/** List of active consent requirements for the subscription's current billing period. */
export type ConsentRequirements = SubscriptionConsentRequirement1[];

export const consentRequirementsSchema: Schema<ConsentRequirements> = s.of<ConsentRequirements>(
  s.union([s.array(s.lazy(() => subscriptionConsentRequirement1Schema))]),
);
