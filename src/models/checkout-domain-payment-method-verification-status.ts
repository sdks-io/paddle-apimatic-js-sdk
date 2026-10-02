import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment method verification status for this checkout domain. */
export const CheckoutDomainPaymentMethodVerificationStatus = {
  /** "verified": { "description": "Payment method is verified for this checkout domain." } */
  Verified: "verified",
  /** "unverified": { "description": "Payment method isn't verified for this checkout domain." } */
  Unverified: "unverified",
} as const;
export type CheckoutDomainPaymentMethodVerificationStatus =
  | (typeof CheckoutDomainPaymentMethodVerificationStatus)[keyof typeof CheckoutDomainPaymentMethodVerificationStatus]
  | (string & {});

export const checkoutDomainPaymentMethodVerificationStatusSchema: EnumSchema<CheckoutDomainPaymentMethodVerificationStatus> =
  s.enumOf<CheckoutDomainPaymentMethodVerificationStatus>(CheckoutDomainPaymentMethodVerificationStatus);
