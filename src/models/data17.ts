import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta11Schema, type ImportMeta11 } from "./unions/import-meta11.js";
import { name14Schema, type Name14 } from "./unions/name14.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";

/** New or changed entity. */
export type Data17 = {
  /** Unique Paddle ID for this customer entity, prefixed with `ctm_`. */
  id: string;
  name: Name14;
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
  customData: CustomData;
  /** A short form locale tag following the IETF BCP 47 standard. @default "en" */
  locale?: string;
  importMeta: ImportMeta11;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  updatedAt: UpdatedAt;
};

export const data17Schema: Schema<Data17> = s.object<Data17>({
  id: s.string(),
  name: name14Schema,
  email: s.string(),
  marketingConsent: s.boolean(),
  status: statusSchema,
  customData: customDataSchema,
  locale: s.defaulted(s.string(), "en"),
  importMeta: importMeta11Schema,
  createdAt: s.dateTime(),
  updatedAt: updatedAtSchema,
  _keysMap: {
    marketingConsent: "marketing_consent",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
