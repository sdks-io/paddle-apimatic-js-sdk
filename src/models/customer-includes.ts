import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { Status, statusSchema } from "./status.js";

/** Represents a customer entity with included entities. */
export type CustomerIncludes = {
  id: string;
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
  /** @default Status.Active */
  status?: Status;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Valid IETF BCP 47 short form locale tag. If omitted, defaults to `en`. @default "en" */
  locale?: string;
  createdAt: Date;
  updatedAt: Date;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const customerIncludesSchema: Schema<CustomerIncludes> = s.object<CustomerIncludes>({
  id: s.string(),
  name: s.optionalNullable(s.string()),
  email: s.string(),
  marketingConsent: s.defaulted(s.boolean(), false),
  status: s.defaulted(statusSchema, Status.Active),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  locale: s.defaulted(s.string(), "en"),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
    importMeta: "import_meta",
  },
});
