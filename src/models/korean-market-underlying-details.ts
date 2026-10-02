import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  koreanMarketUnderlyingPaymentMethodTypeSchema,
  type KoreanMarketUnderlyingPaymentMethodType,
} from "./korean-market-underlying-payment-method-type.js";

/**
 * Information about the Korean payment method used to pay. `null` unless the type is `korea_local`.
 */
export type KoreanMarketUnderlyingDetails = {
  type: KoreanMarketUnderlyingPaymentMethodType;
};

export const koreanMarketUnderlyingDetailsSchema: Schema<KoreanMarketUnderlyingDetails> =
  s.object<KoreanMarketUnderlyingDetails>({
    type: koreanMarketUnderlyingPaymentMethodTypeSchema,
  });
