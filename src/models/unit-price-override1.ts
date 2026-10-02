import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { money2Schema, type Money2 } from "./money2.js";

export type UnitPriceOverride1 = {
  /**
   * Supported two-letter ISO 3166-1 alpha-2 country code. Customers located in the listed countries
   * are charged the override price.
   */
  countryCodes: CountryCodeSupported[];
  /**
   * Override price. This price applies to customers located in the countries for this unit price
   * override.
   */
  unitPrice: Money2;
};

export const unitPriceOverride1Schema: Schema<UnitPriceOverride1> = s.object<UnitPriceOverride1>({
  countryCodes: s.array(s.lazy(() => countryCodeSupportedSchema)),
  unitPrice: money2Schema,
  _keysMap: {
    countryCodes: "country_codes",
    unitPrice: "unit_price",
  },
});
