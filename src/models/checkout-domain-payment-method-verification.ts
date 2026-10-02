import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutDomainApplePayVerificationSchema,
  type CheckoutDomainApplePayVerification,
} from "./checkout-domain-apple-pay-verification.js";

/** Payment method verification status for this checkout domain. */
export type CheckoutDomainPaymentMethodVerification = {
  /** Apple Pay verification status for this checkout domain. */
  applePay: CheckoutDomainApplePayVerification;
};

export const checkoutDomainPaymentMethodVerificationSchema: Schema<CheckoutDomainPaymentMethodVerification> =
  s.object<CheckoutDomainPaymentMethodVerification>({
    applePay: checkoutDomainApplePayVerificationSchema,
    _keysMap: {
      applePay: "apple_pay",
    },
  });
