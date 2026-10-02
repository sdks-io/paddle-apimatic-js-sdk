import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { name1Schema, type Name1 } from "./unions/name1.js";

/** Represents a customer entity when creating customers. */
export type CustomerCreate = {
  id?: string;
  /**
   * Full name of this customer. Required when creating transactions where `collection_mode` is
   * `manual` (invoices).
   */
  name?: Name1;
  /** Email address for this customer. */
  email: string;
  /**
   * Whether this customer opted into marketing from you. `false` unless customers check the
   * marketing consent box when using Paddle Checkout. Set automatically by Paddle.
   *
   * @default false
   */
  marketingConsent?: boolean;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /** Valid IETF BCP 47 short form locale tag. If omitted, defaults to `en`. @default "en" */
  locale?: string;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const customerCreateSchema: Schema<CustomerCreate> = s.object<CustomerCreate>({
  id: s.optional(s.string()),
  name: s.optional(s.lazy(() => name1Schema)),
  email: s.string(),
  marketingConsent: s.defaulted(s.boolean(), false),
  customData: s.optional(s.lazy(() => customDataSchema)),
  locale: s.defaulted(s.string(), "en"),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
