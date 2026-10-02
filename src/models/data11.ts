import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessContactsItemSchema, type BusinessContactsItem } from "./business-contacts-item.js";
import { statusSchema, type Status } from "./status.js";
import { companyNumber3Schema, type CompanyNumber3 } from "./unions/company-number3.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import { taxIdentifier3Schema, type TaxIdentifier3 } from "./unions/tax-identifier3.js";

/** New or changed entity. */
export type Data11 = {
  /** Unique Paddle ID for this business entity, prefixed with `biz_`. */
  id: string;
  /** The ID of the customer this business belongs to. */
  customerId: string;
  /** Full name. */
  name: string;
  /** Company number for this business. */
  companyNumber: CompanyNumber3;
  /** Tax or VAT Number for this business. */
  taxIdentifier: TaxIdentifier3;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  contacts: BusinessContactsItem[];
  /** Your own structured key-value data. */
  customData: CustomData;
  importMeta: ImportMeta11;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data11Schema: Schema<Data11> = s.object<Data11>({
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  companyNumber: companyNumber3Schema,
  taxIdentifier: taxIdentifier3Schema,
  status: statusSchema,
  contacts: s.array(s.lazy(() => businessContactsItemSchema)),
  customData: customDataSchema,
  importMeta: importMeta11Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    customerId: "customer_id",
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
