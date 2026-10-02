import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { koreaLocalSchema, type KoreaLocal } from "./unions/korea-local.js";

/**
 * Information about the underlying payment method used to pay. Populated for payment methods that
 * offer multiple payment options, like `korea_local`. Deprecated - use top-level type objects
 * instead.
 */
export type PaymentMethodUnderlyingDetails = {
  koreaLocal: KoreaLocal;
};

export const paymentMethodUnderlyingDetailsSchema: Schema<PaymentMethodUnderlyingDetails> =
  s.object<PaymentMethodUnderlyingDetails>({
    koreaLocal: koreaLocalSchema,
    _keysMap: {
      koreaLocal: "korea_local",
    },
  });
