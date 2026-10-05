import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";

/** Represents an address entity when creating addresses. */
export type AddressCreate = {
  id?: string;
  /** Memorable description for this address. */
  description?: string | null;
  /** First line of this address. */
  firstLine?: string | null;
  /** Second line of this address. */
  secondLine?: string | null;
  /** City of this address. */
  city?: string | null;
  /** ZIP or postal code of this address. Required for some countries. */
  postalCode?: string | null;
  /** State, county, or region of this address. */
  region?: string | null;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const addressCreateSchema: Schema<AddressCreate> = s.object<AddressCreate>({
  id: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  firstLine: s.optionalNullable(s.string()),
  secondLine: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  countryCode: countryCodeSupportedSchema,
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    firstLine: "first_line",
    secondLine: "second_line",
    postalCode: "postal_code",
    countryCode: "country_code",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
