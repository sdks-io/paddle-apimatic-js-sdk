import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { postalCode3Schema, type PostalCode3 } from "./unions/postal-code3.js";

/** Represents an address entity when previewing addresses. */
export type AddressPreview1 = {
  /** ZIP or postal code of this address. Include for more accurate tax calculations. */
  postalCode?: PostalCode3;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
};

export const addressPreview1Schema: Schema<AddressPreview1> = s.object<AddressPreview1>({
  postalCode: s.optional(s.lazy(() => postalCode3Schema)),
  countryCode: countryCodeSupportedSchema,
  _keysMap: {
    postalCode: "postal_code",
    countryCode: "country_code",
  },
});
