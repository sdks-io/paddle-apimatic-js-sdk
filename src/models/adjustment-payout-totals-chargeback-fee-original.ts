import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeChargebacksSchema, type CurrencyCodeChargebacks } from "./currency-code-chargebacks.js";

export type AdjustmentPayoutTotalsChargebackFeeOriginal = {
  /** Fee amount for this chargeback in the original currency. */
  amount: string;
  /** Three-letter ISO 4217 currency code for the original chargeback fee. */
  currencyCode: CurrencyCodeChargebacks;
};

export const adjustmentPayoutTotalsChargebackFeeOriginalSchema: Schema<AdjustmentPayoutTotalsChargebackFeeOriginal> =
  s.object<AdjustmentPayoutTotalsChargebackFeeOriginal>({
    amount: s.string(),
    currencyCode: currencyCodeChargebacksSchema,
    _keysMap: {
      currencyCode: "currency_code",
    },
  });
