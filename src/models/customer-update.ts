import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a customer entity when updating customers. */
export type CustomerUpdate = {
  /**
   * Full name of this customer. Required when creating transactions where `collection_mode` is
   * `manual` (invoices).
   */
  name?: string | null;
  /** Email address for this customer. */
  email?: string;
  /**
   * Whether this customer opted into marketing from you. `false` unless customers check the
   * marketing consent box when using Paddle Checkout. Set automatically by Paddle.
   */
  marketingConsent?: boolean;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Valid IETF BCP 47 short form locale tag. */
  locale?: string;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const customerUpdateSchema: Schema<CustomerUpdate> = s.object<CustomerUpdate>({
  name: s.optionalNullable(s.string()),
  email: s.optional(s.string()),
  marketingConsent: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => statusSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  locale: s.optional(s.string()),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
