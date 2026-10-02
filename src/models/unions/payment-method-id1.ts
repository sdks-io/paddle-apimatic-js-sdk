import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of a payment method. Adds payment method details to webhook payloads. Requires
 * `customer_id`.
 */
export type PaymentMethodId1 = string;

export const paymentMethodId1Schema: Schema<PaymentMethodId1> = s.of<PaymentMethodId1>(s.union([s.string()]));
