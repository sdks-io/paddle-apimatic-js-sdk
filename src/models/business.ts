import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessContactsItemSchema, type BusinessContactsItem } from "./business-contacts-item.js";
import { Status, statusSchema } from "./status.js";
import { companyNumberSchema, type CompanyNumber } from "./unions/company-number.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { taxIdentifierSchema, type TaxIdentifier } from "./unions/tax-identifier.js";

/** Represents a business entity. */
export type Business = {
  id: string;
  /** Paddle ID for the customer related to this business, prefixed with `cus_`. */
  customerId: string;
  /** Name of this business. */
  name: string;
  /** Company number for this business. */
  companyNumber: CompanyNumber;
  /** Tax or VAT Number for this business. */
  taxIdentifier: TaxIdentifier;
  /** @default Status.Active */
  status?: Status;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts: BusinessContactsItem[];
  createdAt: Date;
  updatedAt: Date;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
};

export const businessSchema: Schema<Business> = s.object<Business>({
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  companyNumber: companyNumberSchema,
  taxIdentifier: taxIdentifierSchema,
  status: s.defaulted(statusSchema, Status.Active),
  contacts: s.array(s.lazy(() => businessContactsItemSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  customData: customDataSchema,
  importMeta: importMeta1Schema,
  _keysMap: {
    customerId: "customer_id",
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    createdAt: "created_at",
    updatedAt: "updated_at",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
