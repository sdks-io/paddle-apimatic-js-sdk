import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { citySchema, type City } from "./unions/city.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { firstLineSchema, type FirstLine } from "./unions/first-line.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { postalCodeSchema, type PostalCode } from "./unions/postal-code.js";
import { regionSchema, type Region } from "./unions/region.js";
import { secondLineSchema, type SecondLine } from "./unions/second-line.js";

/** Represents an address entity when creating addresses. */
export type AddressCreate = {
  id?: string;
  /** Memorable description for this address. */
  description?: Description;
  /** First line of this address. */
  firstLine?: FirstLine;
  /** Second line of this address. */
  secondLine?: SecondLine;
  /** City of this address. */
  city?: City;
  /** ZIP or postal code of this address. Required for some countries. */
  postalCode?: PostalCode;
  /** State, county, or region of this address. */
  region?: Region;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const addressCreateSchema: Schema<AddressCreate> = s.object<AddressCreate>({
  id: s.optional(s.string()),
  description: s.optional(s.lazy(() => descriptionSchema)),
  firstLine: s.optional(s.lazy(() => firstLineSchema)),
  secondLine: s.optional(s.lazy(() => secondLineSchema)),
  city: s.optional(s.lazy(() => citySchema)),
  postalCode: s.optional(s.lazy(() => postalCodeSchema)),
  region: s.optional(s.lazy(() => regionSchema)),
  countryCode: countryCodeSupportedSchema,
  customData: s.optional(s.lazy(() => customDataSchema)),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
  _keysMap: {
    firstLine: "first_line",
    secondLine: "second_line",
    postalCode: "postal_code",
    countryCode: "country_code",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
