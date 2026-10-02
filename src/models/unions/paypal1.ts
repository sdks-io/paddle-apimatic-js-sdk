import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payPalSchema, type PayPal } from "../pay-pal.js";

/** Information about the PayPal payment method saved. `null` unless `type` is `paypal`. */
export type Paypal1 = PayPal;

export const paypal1Schema: Schema<Paypal1> = s.of<Paypal1>(s.union([s.lazy(() => payPalSchema)]));
