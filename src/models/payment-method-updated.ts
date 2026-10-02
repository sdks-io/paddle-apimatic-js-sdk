import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details specific to `subscription_payment_method_updated` actions. */
export type PaymentMethodUpdated = {
  /** What happened on the subscription. @default "subscription_payment_method_updated" */
  action?: "subscription_payment_method_updated";
};

export const paymentMethodUpdatedSchema: Schema<PaymentMethodUpdated> = s.object<PaymentMethodUpdated>({
  action: s.defaulted(
    s.literal("subscription_payment_method_updated"),
    "subscription_payment_method_updated",
  ),
});
