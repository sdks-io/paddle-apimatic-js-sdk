import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment method to verify. Currently only apple_pay is supported. */
export const CheckoutDomainPaymentMethod = {
  /** "apple_pay": { "description": "Verify this checkout domain for Apple Pay." } */
  ApplePay: "apple_pay",
} as const;
export type CheckoutDomainPaymentMethod =
  | (typeof CheckoutDomainPaymentMethod)[keyof typeof CheckoutDomainPaymentMethod]
  | (string & {});

export const checkoutDomainPaymentMethodSchema: EnumSchema<CheckoutDomainPaymentMethod> =
  s.enumOf<CheckoutDomainPaymentMethod>(CheckoutDomainPaymentMethod);
