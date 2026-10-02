import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paymentMethodUnderlyingDetails1Schema,
  type PaymentMethodUnderlyingDetails1,
} from "../payment-method-underlying-details1.js";

export type UnderlyingDetails2 = PaymentMethodUnderlyingDetails1;

export const underlyingDetails2Schema: Schema<UnderlyingDetails2> = s.of<UnderlyingDetails2>(
  s.union([s.lazy(() => paymentMethodUnderlyingDetails1Schema)]),
);
