import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodOriginSchema, type PaymentMethodOrigin } from "./payment-method-origin.js";
import { savedPaymentMethodTypeSchema, type SavedPaymentMethodType } from "./saved-payment-method-type.js";
import { card11Schema, type Card11 } from "./unions/card11.js";
import { paypal1Schema, type Paypal1 } from "./unions/paypal1.js";
import {
  southKoreaLocalCard11Schema,
  type SouthKoreaLocalCard11,
} from "./unions/south-korea-local-card11.js";
import { underlyingDetailsSchema, type UnderlyingDetails } from "./unions/underlying-details.js";

/** Represents a customer payment method entity. */
export type PaymentMethod = {
  id: string;
  /** Paddle ID of the customer that this payment method is saved for, prefixed with `ctm_`. */
  customerId: string;
  /** Paddle ID of the address for this payment method, prefixed with `add_`. */
  addressId: string;
  /** Type of payment method saved. */
  type: SavedPaymentMethodType;
  /** Information about the credit or debit card saved. `null` unless `type` is `card`. */
  card: Card11;
  /** Information about the PayPal payment method saved. `null` unless `type` is `paypal`. */
  paypal: Paypal1;
  underlyingDetails?: UnderlyingDetails;
  /**
   * Information about the Korean payment method used to pay. `null` unless `type` is
   * `south_korea_local_card`.
   */
  southKoreaLocalCard: SouthKoreaLocalCard11;
  /** Describes how this payment method was saved. */
  origin: PaymentMethodOrigin;
  savedAt: Date;
  updatedAt: Date;
};

export const paymentMethodSchema: Schema<PaymentMethod> = s.object<PaymentMethod>({
  id: s.string(),
  customerId: s.string(),
  addressId: s.string(),
  type: savedPaymentMethodTypeSchema,
  card: card11Schema,
  paypal: paypal1Schema,
  underlyingDetails: s.optional(s.lazy(() => underlyingDetailsSchema)),
  southKoreaLocalCard: southKoreaLocalCard11Schema,
  origin: paymentMethodOriginSchema,
  savedAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    underlyingDetails: "underlying_details",
    southKoreaLocalCard: "south_korea_local_card",
    savedAt: "saved_at",
    updatedAt: "updated_at",
  },
});
