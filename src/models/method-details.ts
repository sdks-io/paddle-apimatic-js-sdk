import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { payPalTransactionSchema, type PayPalTransaction } from "./pay-pal-transaction.js";
import { paymentMethodTypeSchema, type PaymentMethodType } from "./payment-method-type.js";
import {
  paymentMethodUnderlyingDetailsSchema,
  type PaymentMethodUnderlyingDetails,
} from "./payment-method-underlying-details.js";
import { southKoreaLocalCardSchema, type SouthKoreaLocalCard } from "./south-korea-local-card.js";

/** Information about the payment method used for a payment attempt. */
export type MethodDetails = {
  /** Type of payment method used for this payment attempt. */
  type: PaymentMethodType;
  /**
   * @deprecated
   */
  underlyingDetails: PaymentMethodUnderlyingDetails | null;
  /**
   * Information about the Korean credit or debit card used to pay. `null` unless `type` is
   * `south_korea_local_card`.
   */
  southKoreaLocalCard: SouthKoreaLocalCard | null;
  /** Information about the credit or debit card used to pay. `null` unless `type` is `card`. */
  card: Card | null;
  /** Information about the PayPal account used to pay. `null` unless `type` is `paypal`. */
  paypal: PayPalTransaction | null;
};

export const methodDetailsSchema: Schema<MethodDetails> = s.object<MethodDetails>({
  type: paymentMethodTypeSchema,
  underlyingDetails: s.nullable(s.lazy(() => paymentMethodUnderlyingDetailsSchema)),
  southKoreaLocalCard: s.nullable(s.lazy(() => southKoreaLocalCardSchema)),
  card: s.nullable(s.lazy(() => cardSchema)),
  paypal: s.nullable(s.lazy(() => payPalTransactionSchema)),
  _keysMap: {
    underlyingDetails: "underlying_details",
    southKoreaLocalCard: "south_korea_local_card",
  },
});
