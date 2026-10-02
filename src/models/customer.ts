import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Status, statusSchema } from "./status.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { name1Schema, type Name1 } from "./unions/name1.js";

/** Represents a customer entity. */
export type Customer = {
  id: string;
  /**
   * Full name of this customer. Required when creating transactions where `collection_mode` is
   * `manual` (invoices).
   */
  name: Name1;
  /** Email address for this customer. */
  email: string;
  /**
   * Whether this customer opted into marketing from you. `false` unless customers check the
   * marketing consent box when using Paddle Checkout. Set automatically by Paddle.
   *
   * @default false
   */
  marketingConsent?: boolean;
  /** @default Status.Active */
  status?: Status;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Valid IETF BCP 47 short form locale tag. If omitted, defaults to `en`. @default "en" */
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  id: s.string(),
  name: name1Schema,
  email: s.string(),
  marketingConsent: s.defaulted(s.boolean(), false),
  status: s.defaulted(statusSchema, Status.Active),
  customData: customDataSchema,
  locale: s.defaulted(s.string(), "en"),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: importMeta1Schema,
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
    importMeta: "import_meta",
  },
});
