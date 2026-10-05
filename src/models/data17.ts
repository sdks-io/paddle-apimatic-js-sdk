import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";

/** New or changed entity. */
export type Data17 = {
  /** Unique Paddle ID for this customer entity, prefixed with `ctm_`. */
  id: string;
  name: string | null;
  /** Email address for this entity. */
  email: string;
  /**
   * Whether this customer opted into marketing from you. `false` unless customers check the
   * marketing consent box when using Paddle Checkout. Set automatically by Paddle.
   */
  marketingConsent: boolean;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  /** A short form locale tag following the IETF BCP 47 standard. @default "en" */
  locale?: string;
  importMeta: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  updatedAt: Date | null;
};

export const data17Schema: Schema<Data17> = s.object<Data17>({
  id: s.string(),
  name: s.nullable(s.string()),
  email: s.string(),
  marketingConsent: s.boolean(),
  status: statusSchema,
  customData: s.nullable(s.record(s.string(), s.unknown())),
  locale: s.defaulted(s.string(), "en"),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.nullable(s.dateTime()),
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
