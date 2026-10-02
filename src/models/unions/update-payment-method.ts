import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Link to the page for this subscription in the customer portal with the payment method update form
 * pre-opened. Use as part of workflows to let customers update their payment details. `null` for
 * manually-collected subscriptions.
 */
export type UpdatePaymentMethod = string;

export const updatePaymentMethodSchema: Schema<UpdatePaymentMethod> = s.of<UpdatePaymentMethod>(
  s.union([s.string()]),
);
