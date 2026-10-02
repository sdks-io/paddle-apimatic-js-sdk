import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentSchema, type Adjustment } from "./adjustment.js";
import { metaSchema, type Meta } from "./meta.js";

export type AdjustmentsResponse1 = {
  /** Represents an adjustment entity. */
  data: Adjustment;
  /** Information about this response. */
  meta: Meta;
};

export const adjustmentsResponse1Schema: Schema<AdjustmentsResponse1> = s.object<AdjustmentsResponse1>({
  data: adjustmentSchema,
  meta: metaSchema,
});
