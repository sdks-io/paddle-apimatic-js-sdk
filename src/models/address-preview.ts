import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";

/** Represents an address entity when previewing addresses. */
export type AddressPreview = {
  /** ZIP or postal code of this address. Include for more accurate tax calculations. */
  postalCode: string | null;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
};

export const addressPreviewSchema: Schema<AddressPreview> = s.object<AddressPreview>({
  postalCode: s.nullable(s.string()),
  countryCode: countryCodeSupportedSchema,
  _keysMap: {
    postalCode: "postal_code",
    countryCode: "country_code",
  },
});
