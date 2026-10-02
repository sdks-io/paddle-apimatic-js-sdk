import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { paymentMethodSchema, type PaymentMethod } from "./payment-method.js";

export type CustomersPaymentMethodsResponse1 = {
  /** Represents a customer payment method entity. */
  data: PaymentMethod;
  /** Information about this response. */
  meta: Meta;
};

export const customersPaymentMethodsResponse1Schema: Schema<CustomersPaymentMethodsResponse1> =
  s.object<CustomersPaymentMethodsResponse1>({
    data: paymentMethodSchema,
    meta: metaSchema,
  });
