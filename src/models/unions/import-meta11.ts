import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { importMetaSchema, type ImportMeta } from "../import-meta.js";

export type ImportMeta11 = ImportMeta;

export const importMeta11Schema: Schema<ImportMeta11> = s.of<ImportMeta11>(
  s.union([s.lazy(() => importMetaSchema)]),
);
