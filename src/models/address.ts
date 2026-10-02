import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { Status, statusSchema } from "./status.js";
import { city1Schema, type City1 } from "./unions/city1.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description1Schema, type Description1 } from "./unions/description1.js";
import { firstLine1Schema, type FirstLine1 } from "./unions/first-line1.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import { postalCode1Schema, type PostalCode1 } from "./unions/postal-code1.js";
import { region1Schema, type Region1 } from "./unions/region1.js";
import { secondLine1Schema, type SecondLine1 } from "./unions/second-line1.js";

/** Represents an address entity. */
export type Address = {
  id: string;
  /** Paddle ID for the customer related to this address, prefixed with `cus_`. */
  customerId: string;
  description: Description1;
  firstLine: FirstLine1;
  secondLine: SecondLine1;
  city: City1;
  postalCode: PostalCode1;
  region: Region1;
  /** Supported two-letter ISO 3166-1 alpha-2 country code for this address. */
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** @default Status.Active */
  status?: Status;
  createdAt: Date;
  updatedAt: Date;
  importMeta: ImportMeta11;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  id: s.string(),
  customerId: s.string(),
  description: description1Schema,
  firstLine: firstLine1Schema,
  secondLine: secondLine1Schema,
  city: city1Schema,
  postalCode: postalCode1Schema,
  region: region1Schema,
  countryCode: countryCodeSupportedSchema,
  customData: customDataSchema,
  status: s.defaulted(statusSchema, Status.Active),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: importMeta11Schema,
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
