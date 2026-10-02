import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details specific to `subscription_payment_method_added` actions. */
export type PaymentMethodAdded = {
  /** What happened on the subscription. @default "subscription_payment_method_added" */
  action?: "subscription_payment_method_added";
};

export const paymentMethodAddedSchema: Schema<PaymentMethodAdded> = s.object<PaymentMethodAdded>({
  action: s.defaulted(s.literal("subscription_payment_method_added"), "subscription_payment_method_added"),
});
