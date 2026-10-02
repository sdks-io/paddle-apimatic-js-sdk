import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSupportedSchema, type CountryCodeSupported } from "./country-code-supported.js";
import { statusSchema, type Status } from "./status.js";
import { city3Schema, type City3 } from "./unions/city3.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { description11Schema, type Description11 } from "./unions/description11.js";
import { firstLine3Schema, type FirstLine3 } from "./unions/first-line3.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import { postalCode5Schema, type PostalCode5 } from "./unions/postal-code5.js";
import { region3Schema, type Region3 } from "./unions/region3.js";
import { secondLine4Schema, type SecondLine4 } from "./unions/second-line4.js";

/** New or changed entity. */
export type Data = {
  /** Unique Paddle ID for this address entity, prefixed with `add_`. */
  id: string;
  /** The ID of the customer this address belongs to. */
  customerId: string;
  description: Description11;
  firstLine: FirstLine3;
  secondLine: SecondLine4;
  city: City3;
  postalCode: PostalCode5;
  region: Region3;
  countryCode: CountryCodeSupported;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  importMeta: ImportMeta11;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  id: s.string(),
  customerId: s.string(),
  description: description11Schema,
  firstLine: firstLine3Schema,
  secondLine: secondLine4Schema,
  city: city3Schema,
  postalCode: postalCode5Schema,
  region: region3Schema,
  countryCode: countryCodeSupportedSchema,
  customData: customDataSchema,
  status: statusSchema,
  importMeta: importMeta11Schema,
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
