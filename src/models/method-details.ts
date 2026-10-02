import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodTypeSchema, type PaymentMethodType } from "./payment-method-type.js";
import { card1Schema, type Card1 } from "./unions/card1.js";
import { paypalModelSchema, type PaypalModel } from "./unions/paypal-model.js";
import { southKoreaLocalCard1Schema, type SouthKoreaLocalCard1 } from "./unions/south-korea-local-card1.js";
import { underlyingDetailsSchema, type UnderlyingDetails } from "./unions/underlying-details.js";

/** Information about the payment method used for a payment attempt. */
export type MethodDetails = {
  /** Type of payment method used for this payment attempt. */
  type: PaymentMethodType;
  /**
   * @deprecated
   */
  underlyingDetails: UnderlyingDetails;
  /**
   * Information about the Korean credit or debit card used to pay. `null` unless `type` is
   * `south_korea_local_card`.
   */
  southKoreaLocalCard: SouthKoreaLocalCard1;
  /** Information about the credit or debit card used to pay. `null` unless `type` is `card`. */
  card: Card1;
  /** Information about the PayPal account used to pay. `null` unless `type` is `paypal`. */
  paypal: PaypalModel;
};

export const methodDetailsSchema: Schema<MethodDetails> = s.object<MethodDetails>({
  type: paymentMethodTypeSchema,
  underlyingDetails: underlyingDetailsSchema,
  southKoreaLocalCard: southKoreaLocalCard1Schema,
  card: card1Schema,
  paypal: paypalModelSchema,
  _keysMap: {
    underlyingDetails: "underlying_details",
    southKoreaLocalCard: "south_korea_local_card",
  },
});
