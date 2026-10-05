import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { statusSchema, type Status } from "./status.js";

/** Represents an address entity when updating addresses. */
export type AddressUpdate = {
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
  countryCode?: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
};

export const addressUpdateSchema: Schema<AddressUpdate> = s.object<AddressUpdate>({
  description: s.optionalNullable(s.string()),
  firstLine: s.optionalNullable(s.string()),
  secondLine: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  countryCode: s.optional(s.lazy(() => countryCodeSupportedSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => statusSchema)),
  _keysMap: {
    firstLine: "first_line",
    secondLine: "second_line",
    postalCode: "postal_code",
    countryCode: "country_code",
    customData: "custom_data",
  },
});
