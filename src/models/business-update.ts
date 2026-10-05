import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactsCreateSchema, type ContactsCreate } from "./contacts-create.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a business entity when updating businesses. */
export type BusinessUpdate = {
  /** Name of this business. */
  name?: string;
  /** Company number for this business. */
  companyNumber?: string | null;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: string | null;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts?: ContactsCreate[] | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
};

export const businessUpdateSchema: Schema<BusinessUpdate> = s.object<BusinessUpdate>({
  name: s.optional(s.string()),
  companyNumber: s.optionalNullable(s.string()),
  taxIdentifier: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  contacts: s.optionalNullable(s.array(s.lazy(() => contactsCreateSchema))),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    customData: "custom_data",
  },
});
