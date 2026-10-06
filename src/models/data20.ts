import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { statusSchema, type Status } from "./status.js";

/** New or changed entity. */
export type Data20 = {
  /** Unique Paddle ID for this discount group, prefixed with `dsg_`. */
  id: string;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /**
   * Name of this discount group, typically something short and memorable for categorization. Not
   * shown to customers.
   */
  name: string;
  importMeta?: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const data20Schema: Schema<Data20> = s.object<Data20>({
  id: s.string(),
  status: statusSchema,
  name: s.string(),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
