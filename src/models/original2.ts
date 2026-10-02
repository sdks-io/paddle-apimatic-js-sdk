import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  currencyCodeChargebacks1Schema,
  type CurrencyCodeChargebacks1,
} from "./currency-code-chargebacks1.js";

/**
 * Chargeback fee before conversion to the payout currency. `null` when the chargeback fee is the
 * same as the payout currency.
 */
export type Original2 = {
  /** Fee amount for this chargeback in the original currency. */
  amount: string;
  /** Three-letter ISO 4217 currency code for the original chargeback fee. */
  currencyCode: CurrencyCodeChargebacks1;
};

export const original2Schema: Schema<Original2> = s.object<Original2>({
  amount: s.string(),
  currencyCode: currencyCodeChargebacks1Schema,
  _keysMap: {
    currencyCode: "currency_code",
  },
});
