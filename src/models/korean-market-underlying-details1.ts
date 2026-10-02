import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  koreanMarketUnderlyingPaymentMethodTypeSchema,
  type KoreanMarketUnderlyingPaymentMethodType,
} from "./korean-market-underlying-payment-method-type.js";

/**
 * Information about the Korean payment method used to pay. `null` unless the type is `korea_local`.
 */
export type KoreanMarketUnderlyingDetails1 = {
  /** Type of Korean payment method used to pay. */
  type: KoreanMarketUnderlyingPaymentMethodType;
};

export const koreanMarketUnderlyingDetails1Schema: Schema<KoreanMarketUnderlyingDetails1> =
  s.object<KoreanMarketUnderlyingDetails1>({
    type: koreanMarketUnderlyingPaymentMethodTypeSchema,
  });
