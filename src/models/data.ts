import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";

/** New or changed entity. */
export type Data = {
  /** Unique Paddle ID for this address entity, prefixed with `add_`. */
  id: string;
  /** The ID of the customer this address belongs to. */
  customerId: string;
  description?: string | null;
  firstLine?: string | null;
  secondLine?: string | null;
  city?: string | null;
  postalCode?: string | null;
  region?: string | null;
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  importMeta?: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const dataSchema: Schema<Data> = s.object<Data>({
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
  status: statusSchema,
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    customerId: "customer_id",
    firstLine: "first_line",
    secondLine: "second_line",
    postalCode: "postal_code",
    countryCode: "country_code",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
