import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { prorationSchema, type Proration } from "../proration.js";

/** How proration was calculated for this adjustment item. */
export type Proration11 = Proration;

export const proration11Schema: Schema<Proration11> = s.of<Proration11>(
  s.union([s.lazy(() => prorationSchema)]),
);
