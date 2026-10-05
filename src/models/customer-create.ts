import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";

/** Represents a customer entity when creating customers. */
export type CustomerCreate = {
  id?: string;
  /**
   * Full name of this customer. Required when creating transactions where `collection_mode` is
   * `manual` (invoices).
   */
  name?: string | null;
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
  customData?: Record<string, unknown> | null;
  /** Valid IETF BCP 47 short form locale tag. If omitted, defaults to `en`. @default "en" */
  locale?: string;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const customerCreateSchema: Schema<CustomerCreate> = s.object<CustomerCreate>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  email: s.string(),
  marketingConsent: s.defaulted(s.boolean(), false),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  locale: s.defaulted(s.string(), "en"),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
