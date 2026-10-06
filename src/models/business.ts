import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessContactsItemSchema, type BusinessContactsItem } from "./business-contacts-item.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { Status, statusSchema } from "./status.js";

/** Represents a business entity. */
export type Business = {
  id: string;
  /** Paddle ID for the customer related to this business, prefixed with `cus_`. */
  customerId: string;
  /** Name of this business. */
  name: string;
  /** Company number for this business. */
  companyNumber?: string | null;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: string | null;
  /** @default Status.Active */
  status?: Status;
  /** List of contacts related to this business, typically used for sending invoices. */
  contacts: BusinessContactsItem[];
  createdAt: Date;
  updatedAt: Date;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const businessSchema: Schema<Business> = s.object<Business>({
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  companyNumber: s.optionalNullable(s.string()),
  taxIdentifier: s.optionalNullable(s.string()),
  status: s.defaulted(statusSchema, Status.Active),
  contacts: s.array(s.lazy(() => businessContactsItemSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
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
