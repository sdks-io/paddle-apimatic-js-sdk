import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutDomainPaymentMethodVerificationStatusSchema,
  type CheckoutDomainPaymentMethodVerificationStatus,
} from "./checkout-domain-payment-method-verification-status.js";

/** Apple Pay verification status for this checkout domain. */
export type CheckoutDomainApplePayVerification = {
  /** Payment method verification status for this checkout domain. */
  status: CheckoutDomainPaymentMethodVerificationStatus;
};

export const checkoutDomainApplePayVerificationSchema: Schema<CheckoutDomainApplePayVerification> =
  s.object<CheckoutDomainApplePayVerification>({
    status: checkoutDomainPaymentMethodVerificationStatusSchema,
  });
