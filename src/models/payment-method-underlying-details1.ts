import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { koreaLocal1Schema, type KoreaLocal1 } from "./unions/korea-local1.js";

/**
 * Information about the underlying payment method used to pay. Populated for payment methods that
 * offer multiple payment options, like `korea_local`. Deprecated - use top-level type objects
 * instead.
 */
export type PaymentMethodUnderlyingDetails1 = {
  koreaLocal: KoreaLocal1;
};

export const paymentMethodUnderlyingDetails1Schema: Schema<PaymentMethodUnderlyingDetails1> =
  s.object<PaymentMethodUnderlyingDetails1>({
    koreaLocal: koreaLocal1Schema,
    _keysMap: {
      koreaLocal: "korea_local",
    },
  });
