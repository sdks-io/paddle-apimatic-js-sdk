import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { payPalSchema, type PayPal } from "./pay-pal.js";
import { paymentMethodOriginSchema, type PaymentMethodOrigin } from "./payment-method-origin.js";
import {
  paymentMethodUnderlyingDetailsSchema,
  type PaymentMethodUnderlyingDetails,
} from "./payment-method-underlying-details.js";
import { savedPaymentMethodTypeSchema, type SavedPaymentMethodType } from "./saved-payment-method-type.js";
import { southKoreaLocalCardSchema, type SouthKoreaLocalCard } from "./south-korea-local-card.js";

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
  card: Card | null;
  /** Information about the PayPal payment method saved. `null` unless `type` is `paypal`. */
  paypal: PayPal | null;
  underlyingDetails?: PaymentMethodUnderlyingDetails | null;
  /**
   * Information about the Korean payment method used to pay. `null` unless `type` is
   * `south_korea_local_card`.
   */
  southKoreaLocalCard: SouthKoreaLocalCard | null;
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
  card: s.nullable(s.lazy(() => cardSchema)),
  paypal: s.nullable(s.lazy(() => payPalSchema)),
  underlyingDetails: s.optionalNullable(s.lazy(() => paymentMethodUnderlyingDetailsSchema)),
  southKoreaLocalCard: s.nullable(s.lazy(() => southKoreaLocalCardSchema)),
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
