import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { prorationSchema, type Proration } from "../proration.js";

/** How proration was calculated for this item. */
export type Proration12 = Proration;

export const proration12Schema: Schema<Proration12> = s.of<Proration12>(
  s.union([s.lazy(() => prorationSchema)]),
);
