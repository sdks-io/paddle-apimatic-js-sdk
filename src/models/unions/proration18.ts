import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { prorationSchema, type Proration } from "../proration.js";

/** How proration was calculated for this item. `null` for transaction previews. */
export type Proration18 = Proration;

export const proration18Schema: Schema<Proration18> = s.of<Proration18>(
  s.union([s.lazy(() => prorationSchema)]),
);
