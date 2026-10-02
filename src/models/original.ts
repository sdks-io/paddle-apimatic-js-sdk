import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  currencyCodeChargebacks1Schema,
  type CurrencyCodeChargebacks1,
} from "./currency-code-chargebacks1.js";

export type Original = {
  /** Fee amount for this chargeback in the original currency. */
  amount: string;
  /** Three-letter ISO 4217 currency code for the original chargeback fee. */
  currencyCode: CurrencyCodeChargebacks1;
};

export const originalSchema: Schema<Original> = s.object<Original>({
  amount: s.string(),
  currencyCode: currencyCodeChargebacks1Schema,
  _keysMap: {
    currencyCode: "currency_code",
  },
});
