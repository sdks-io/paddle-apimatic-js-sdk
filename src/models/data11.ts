import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessContactsItemSchema, type BusinessContactsItem } from "./business-contacts-item.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";

/** New or changed entity. */
export type Data11 = {
  /** Unique Paddle ID for this business entity, prefixed with `biz_`. */
  id: string;
  /** The ID of the customer this business belongs to. */
  customerId: string;
  /** Full name. */
  name: string;
  /** Company number for this business. */
  companyNumber?: string | null;
  /** Tax or VAT Number for this business. */
  taxIdentifier?: string | null;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  contacts: BusinessContactsItem[];
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  importMeta?: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data11Schema: Schema<Data11> = s.object<Data11>({
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  companyNumber: s.optionalNullable(s.string()),
  taxIdentifier: s.optionalNullable(s.string()),
  status: statusSchema,
  contacts: s.array(s.lazy(() => businessContactsItemSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
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
