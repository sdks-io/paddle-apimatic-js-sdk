import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a request to verify a payment method for a checkout domain. */
export type CheckoutDomainVerifyPaymentMethod = {
  /** Payment method to verify. Currently only apple_pay is supported. @default "apple_pay" */
  paymentMethod?: "apple_pay";
};

export const checkoutDomainVerifyPaymentMethodSchema: Schema<CheckoutDomainVerifyPaymentMethod> =
  s.object<CheckoutDomainVerifyPaymentMethod>({
    paymentMethod: s.defaulted(s.literal("apple_pay"), "apple_pay"),
    _keysMap: {
      paymentMethod: "payment_method",
    },
  });
