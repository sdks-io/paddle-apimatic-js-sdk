import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details specific to `subscription_payment_method_removed` actions. */
export type PaymentMethodRemoved = {
  /** What happened on the subscription. @default "subscription_payment_method_removed" */
  action?: "subscription_payment_method_removed";
};

export const paymentMethodRemovedSchema: Schema<PaymentMethodRemoved> = s.object<PaymentMethodRemoved>({
  action: s.defaulted(
    s.literal("subscription_payment_method_removed"),
    "subscription_payment_method_removed",
  ),
});
