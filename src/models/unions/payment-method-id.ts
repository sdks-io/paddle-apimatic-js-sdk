import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the payment method used for this payment attempt, prefixed with `paymtd_`. */
export type PaymentMethodId = string;

export const paymentMethodIdSchema: Schema<PaymentMethodId> = s.of<PaymentMethodId>(s.union([s.string()]));
