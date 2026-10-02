import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payPalTransactionSchema, type PayPalTransaction } from "../pay-pal-transaction.js";

/** Information about the PayPal account used to pay. `null` unless `type` is `paypal`. */
export type PaypalModel = PayPalTransaction;

export const paypalModelSchema: Schema<PaypalModel> = s.of<PaypalModel>(
  s.union([s.lazy(() => payPalTransactionSchema)]),
);
