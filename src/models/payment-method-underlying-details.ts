import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  koreanMarketUnderlyingDetailsSchema,
  type KoreanMarketUnderlyingDetails,
} from "./korean-market-underlying-details.js";

/**
 * Information about the underlying payment method used to pay. Populated for payment methods that
 * offer multiple payment options, like `korea_local`. Deprecated - use top-level type objects
 * instead.
 */
export type PaymentMethodUnderlyingDetails = {
  koreaLocal: KoreanMarketUnderlyingDetails | null;
};

export const paymentMethodUnderlyingDetailsSchema: Schema<PaymentMethodUnderlyingDetails> =
  s.object<PaymentMethodUnderlyingDetails>({
    koreaLocal: s.nullable(s.lazy(() => koreanMarketUnderlyingDetailsSchema)),
    _keysMap: {
      koreaLocal: "korea_local",
    },
  });
