import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactsCreateSchema, type ContactsCreate } from "./contacts-create.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";

/** Represents a business entity when creating businesses. */
export type BusinessCreate = {
  id?: string;
  /** Name of this business. */
  name: string;
  /** Company number for this business. */
  companyNumber?: string | null;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: string | null;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts?: ContactsCreate[] | null;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const businessCreateSchema: Schema<BusinessCreate> = s.object<BusinessCreate>({
  id: s.optional(s.string()),
  name: s.string(),
  companyNumber: s.optionalNullable(s.string()),
  taxIdentifier: s.optionalNullable(s.string()),
  contacts: s.optionalNullable(s.array(s.lazy(() => contactsCreateSchema))),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    companyNumber: "company_number",
    taxIdentifier: "tax_identifier",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
