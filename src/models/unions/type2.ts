import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { catalogTypeSchema, type CatalogType } from "../catalog-type.js";

export type Type2 = CatalogType;

export const type2Schema: Schema<Type2> = s.of<Type2>(s.union([s.lazy(() => catalogTypeSchema)]));
