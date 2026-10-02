import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/**
 * Override price. This price applies to customers located in the countries for this unit price
 * override.
 */
export type MoneyWithOptionalCurrency2 = {
  /**
   * Amount in the lowest denomination for the currency, e.g. 10 USD = 1000 (cents). Although
   * represented as a string, this value must be a valid integer.
   */
  amount: string;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode?: CurrencyCode;
};

export const moneyWithOptionalCurrency2Schema: Schema<MoneyWithOptionalCurrency2> =
  s.object<MoneyWithOptionalCurrency2>({
    amount: s.string(),
    currencyCode: s.optional(s.lazy(() => currencyCodeSchema)),
    _keysMap: {
      currencyCode: "currency_code",
    },
  });
