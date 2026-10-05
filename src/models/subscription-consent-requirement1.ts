import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionConsentRequirementStatusSchema,
  type SubscriptionConsentRequirementStatus,
} from "./subscription-consent-requirement-status.js";
import {
  subscriptionConsentRequirementTypeSchema,
  type SubscriptionConsentRequirementType,
} from "./subscription-consent-requirement-type.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

/**
 * Represents a specific condition under which explicit customer consent is, or was, mandated for a
 * subscription renewal.
 */
export type SubscriptionConsentRequirement1 = {
  /**
   * Unique Paddle ID for this subscription consent requirement entity, prefixed with `subconreq_`.
   */
  id: string;
  /** Type of consent required for successful renewal. */
  requirement: SubscriptionConsentRequirementType;
  /** Status of this consent requirement. */
  status: SubscriptionConsentRequirementStatus;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /**
   * Period during which consent for this subscription can be granted. `null` if there is no
   * `next_billed_at` or the consent requirement does not apply to the current billing period.
   */
  consentPeriod: TimePeriod | null;
  /**
   * RFC 3339 datetime string of when the customer granted their consent. `null` if not yet granted.
   */
  grantedAt: Date | null;
  /**
   * RFC 3339 datetime string of when consent was voided or no longer required. `null` if not
   * voided.
   */
  voidedAt: Date | null;
};

export const subscriptionConsentRequirement1Schema: Schema<SubscriptionConsentRequirement1> =
  s.object<SubscriptionConsentRequirement1>({
    id: s.string(),
    requirement: subscriptionConsentRequirementTypeSchema,
    status: subscriptionConsentRequirementStatusSchema,
    createdAt: s.dateTime(),
    consentPeriod: s.nullable(s.lazy(() => timePeriodSchema)),
    grantedAt: s.nullable(s.dateTime()),
    voidedAt: s.nullable(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      consentPeriod: "consent_period",
      grantedAt: "granted_at",
      voidedAt: "voided_at",
    },
  });
