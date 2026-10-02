import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodOriginSchema, type PaymentMethodOrigin } from "./payment-method-origin.js";
import { savedPaymentMethodTypeSchema, type SavedPaymentMethodType } from "./saved-payment-method-type.js";

/** New or changed entity. */
export type Data25 = {
  /** Unique Paddle ID for the payment method, prefixed with `paymtd_` */
  id: string;
  /** Unique Paddle ID for the customer, prefixed with `ctm_` */
  customerId: string;
  /** Unique Paddle ID for the address, prefixed with `add_` */
  addressId: string;
  /** Type of payment method saved. */
  type: SavedPaymentMethodType;
  /** Describes how this payment method was saved. */
  origin: PaymentMethodOrigin;
  /** RFC 3339 datetime string of when this entity was saved. Set automatically by Paddle. */
  savedAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data25Schema: Schema<Data25> = s.object<Data25>({
  id: s.string(),
  customerId: s.string(),
  addressId: s.string(),
  type: savedPaymentMethodTypeSchema,
  origin: paymentMethodOriginSchema,
  savedAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    savedAt: "saved_at",
    updatedAt: "updated_at",
  },
});
