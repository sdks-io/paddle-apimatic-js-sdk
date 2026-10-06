import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { Status, statusSchema } from "./status.js";

/** Represents an address entity. */
export type Address = {
  id: string;
  /** Paddle ID for the customer related to this address, prefixed with `cus_`. */
  customerId: string;
  description?: string | null;
  firstLine?: string | null;
  secondLine?: string | null;
  city?: string | null;
  postalCode?: string | null;
  region?: string | null;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** @default Status.Active */
  status?: Status;
  createdAt: Date;
  updatedAt: Date;
  importMeta?: ImportMeta | null;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  id: s.string(),
  customerId: s.string(),
  description: s.optionalNullable(s.string()),
  firstLine: s.optionalNullable(s.string()),
  secondLine: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  countryCode: countryCodeSupportedSchema,
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.defaulted(statusSchema, Status.Active),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    customerId: "customer_id",
    firstLine: "first_line",
    secondLine: "second_line",
    postalCode: "postal_code",
    countryCode: "country_code",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
    importMeta: "import_meta",
  },
});
