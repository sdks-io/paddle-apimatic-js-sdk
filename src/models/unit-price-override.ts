import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { moneySchema, type Money } from "./money.js";

export type UnitPriceOverride = {
  /**
   * Supported two-letter ISO 3166-1 alpha-2 country code. Customers located in the listed countries
   * are charged the override price.
   */
  countryCodes: CountryCodeSupported[];
  /**
   * Override price. This price applies to customers located in the countries for this unit price
   * override.
   */
  unitPrice: Money;
};

export const unitPriceOverrideSchema: Schema<UnitPriceOverride> = s.object<UnitPriceOverride>({
  countryCodes: s.array(s.lazy(() => countryCodeSupportedSchema)),
  unitPrice: moneySchema,
  _keysMap: {
    countryCodes: "country_codes",
    unitPrice: "unit_price",
  },
});
