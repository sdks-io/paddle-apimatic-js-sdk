import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { payPalTransactionSchema, type PayPalTransaction } from "./pay-pal-transaction.js";
import { paymentMethodTypeSchema, type PaymentMethodType } from "./payment-method-type.js";
import {
  paymentMethodUnderlyingDetails1Schema,
  type PaymentMethodUnderlyingDetails1,
} from "./payment-method-underlying-details1.js";
import { southKoreaLocalCardSchema, type SouthKoreaLocalCard } from "./south-korea-local-card.js";

/** Information about the payment method used for a payment attempt. */
export type MethodDetails1 = {
  /** Type of payment method used for this payment attempt. */
  type: PaymentMethodType;
  /**
   * @deprecated
   */
  underlyingDetails?: PaymentMethodUnderlyingDetails1 | null;
  /**
   * Information about the Korean credit or debit card used to pay. `null` unless `type` is
   * `south_korea_local_card`.
   */
  southKoreaLocalCard?: SouthKoreaLocalCard | null;
  /** Information about the credit or debit card used to pay. `null` unless `type` is `card`. */
  card?: Card | null;
  /** Information about the PayPal account used to pay. `null` unless `type` is `paypal`. */
  paypal?: PayPalTransaction | null;
};

export const methodDetails1Schema: Schema<MethodDetails1> = s.object<MethodDetails1>({
  type: paymentMethodTypeSchema,
  underlyingDetails: s.optionalNullable(s.lazy(() => paymentMethodUnderlyingDetails1Schema)),
  southKoreaLocalCard: s.optionalNullable(s.lazy(() => southKoreaLocalCardSchema)),
  card: s.optionalNullable(s.lazy(() => cardSchema)),
  paypal: s.optionalNullable(s.lazy(() => payPalTransactionSchema)),
  _keysMap: {
    underlyingDetails: "underlying_details",
    southKoreaLocalCard: "south_korea_local_card",
  },
});
