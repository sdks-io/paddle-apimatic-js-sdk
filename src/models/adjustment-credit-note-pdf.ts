import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdjustmentCreditNotePdf = {
  /** URL of the requested resource. */
  url: string;
};

export const adjustmentCreditNotePdfSchema: Schema<AdjustmentCreditNotePdf> =
  s.object<AdjustmentCreditNotePdf>({
    url: s.string(),
  });
