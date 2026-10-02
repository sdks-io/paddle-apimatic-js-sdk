import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { companyNumberSchema, type CompanyNumber } from "./unions/company-number.js";
import { contactsSchema, type Contacts } from "./unions/contacts.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { taxIdentifierSchema, type TaxIdentifier } from "./unions/tax-identifier.js";

/** Represents a business entity when updating businesses. */
export type BusinessUpdate = {
  /** Name of this business. */
  name?: string;
  /** Company number for this business. */
  companyNumber?: CompanyNumber;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: TaxIdentifier;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts?: Contacts;
  /** Your own structured key-value data. */
  customData?: CustomData;
};

export const businessUpdateSchema: Schema<BusinessUpdate> = s.object<BusinessUpdate>({
  name: s.optional(s.string()),
  companyNumber: s.optional(s.lazy(() => companyNumberSchema)),
  taxIdentifier: s.optional(s.lazy(() => taxIdentifierSchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  contacts: s.optional(s.lazy(() => contactsSchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  _keysMap: {
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    customData: "custom_data",
  },
});
