import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referenceSchema, type Reference } from "./unions/reference.js";

/** PayPal payment attempt metadata */
export type PayPalTransaction = {
  /** Email address associated with the PayPal account. */
  email: string;
  /**
   * PayPal billing agreement identifier. Only populated for subscription payments where a billing
   * agreement was created between the customer and PayPal. `null` for one-off PayPal payments.
   */
  reference: Reference;
};

export const payPalTransactionSchema: Schema<PayPalTransaction> = s.object<PayPalTransaction>({
  email: s.string(),
  reference: referenceSchema,
});
