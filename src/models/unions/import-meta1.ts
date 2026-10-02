import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "../import-meta.js";

/** Import information for this entity. `null` if this entity is not imported. */
export type ImportMeta1 = ImportMeta;

export const importMeta1Schema: Schema<ImportMeta1> = s.of<ImportMeta1>(
  s.union([s.lazy(() => importMetaSchema)]),
);
