import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paymentMethodUnderlyingDetailsSchema,
  type PaymentMethodUnderlyingDetails,
} from "../payment-method-underlying-details.js";

export type UnderlyingDetails = PaymentMethodUnderlyingDetails;

export const underlyingDetailsSchema: Schema<UnderlyingDetails> = s.of<UnderlyingDetails>(
  s.union([s.lazy(() => paymentMethodUnderlyingDetailsSchema)]),
);
