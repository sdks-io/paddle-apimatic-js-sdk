import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import {
  moneyWithOptionalCurrencySchema,
  type MoneyWithOptionalCurrency,
} from "./money-with-optional-currency.js";

/**
 * Override price for the trial period. Customers located in the listed countries are charged the
 * override price during the trial.
 */
export type UnitPriceTrialOverride = {
  /**
   * Supported two-letter ISO 3166-1 alpha-2 country code. Customers located in the listed countries
   * are charged the override price.
   */
  countryCodes: CountryCodeSupported[];
  /**
   * Override price. This price applies to customers located in the countries for this unit price
   * override.
   */
  unitPrice: MoneyWithOptionalCurrency;
};

export const unitPriceTrialOverrideSchema: Schema<UnitPriceTrialOverride> = s.object<UnitPriceTrialOverride>({
  countryCodes: s.array(s.lazy(() => countryCodeSupportedSchema)),
  unitPrice: moneyWithOptionalCurrencySchema,
  _keysMap: {
    countryCodes: "country_codes",
    unitPrice: "unit_price",
  },
});
