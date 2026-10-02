import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyNumberSchema, type CompanyNumber } from "./unions/company-number.js";
import { contactsSchema, type Contacts } from "./unions/contacts.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { taxIdentifierSchema, type TaxIdentifier } from "./unions/tax-identifier.js";

/** Represents a business entity when creating businesses. */
export type BusinessCreate = {
  id?: string;
  /** Name of this business. */
  name: string;
  /** Company number for this business. */
  companyNumber?: CompanyNumber;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: TaxIdentifier;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts?: Contacts;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const businessCreateSchema: Schema<BusinessCreate> = s.object<BusinessCreate>({
  id: s.optional(s.string()),
  name: s.string(),
  companyNumber: s.optional(s.lazy(() => companyNumberSchema)),
  taxIdentifier: s.optional(s.lazy(() => taxIdentifierSchema)),
  contacts: s.optional(s.lazy(() => contactsSchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
  _keysMap: {
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
