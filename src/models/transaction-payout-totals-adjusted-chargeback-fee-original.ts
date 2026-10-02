import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeChargebacksSchema, type CurrencyCodeChargebacks } from "./currency-code-chargebacks.js";

/**
 * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
 * same as the payout currency.
 */
export type TransactionPayoutTotalsAdjustedChargebackFeeOriginal = {
  /** Fee amount for this chargeback in the original currency. */
  amount: string;
  /** Three-letter ISO 4217 currency code for the original chargeback fee. */
  currencyCode: CurrencyCodeChargebacks;
};

export const transactionPayoutTotalsAdjustedChargebackFeeOriginalSchema: Schema<TransactionPayoutTotalsAdjustedChargebackFeeOriginal> =
  s.object<TransactionPayoutTotalsAdjustedChargebackFeeOriginal>({
    amount: s.string(),
    currencyCode: currencyCodeChargebacksSchema,
    _keysMap: {
      currencyCode: "currency_code",
    },
  });
