import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutDomainApprovalStatusSchema,
  type CheckoutDomainApprovalStatus,
} from "./checkout-domain-approval-status.js";
import {
  checkoutDomainPaymentMethodVerificationSchema,
  type CheckoutDomainPaymentMethodVerification,
} from "./checkout-domain-payment-method-verification.js";

/** Represents a checkout domain entity. */
export type CheckoutDomain = {
  id: string;
  /** Checkout domain name. */
  domain: string;
  status: CheckoutDomainApprovalStatus;
  paymentMethodVerification: CheckoutDomainPaymentMethodVerification;
  createdAt: Date;
  updatedAt: Date;
};

export const checkoutDomainSchema: Schema<CheckoutDomain> = s.object<CheckoutDomain>({
  id: s.string(),
  domain: s.string(),
  status: checkoutDomainApprovalStatusSchema,
  paymentMethodVerification: checkoutDomainPaymentMethodVerificationSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    paymentMethodVerification: "payment_method_verification",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
