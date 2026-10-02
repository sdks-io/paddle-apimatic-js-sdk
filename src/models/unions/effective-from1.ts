import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { effectiveFromSchema, type EffectiveFrom } from "../effective-from.js";

export type EffectiveFrom1 = EffectiveFrom;

export const effectiveFrom1Schema: Schema<EffectiveFrom1> = s.of<EffectiveFrom1>(
  s.union([s.lazy(() => effectiveFromSchema)]),
);
