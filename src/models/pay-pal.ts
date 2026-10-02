import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PayPal metadata */
export type PayPal = {
  /** Email address associated with the PayPal account. */
  email: string;
  /** PayPal payment method identifier. */
  reference: string;
};

export const payPalSchema: Schema<PayPal> = s.object<PayPal>({
  email: s.string(),
  reference: s.string(),
});
