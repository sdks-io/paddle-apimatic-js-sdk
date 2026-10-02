import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentCreditNotePdfSchema, type AdjustmentCreditNotePdf } from "./adjustment-credit-note-pdf.js";
import { metaSchema, type Meta } from "./meta.js";

export type AdjustmentsCreditNoteResponse = {
  data: AdjustmentCreditNotePdf;
  /** Information about this response. */
  meta: Meta;
};

export const adjustmentsCreditNoteResponseSchema: Schema<AdjustmentsCreditNoteResponse> =
  s.object<AdjustmentsCreditNoteResponse>({
    data: adjustmentCreditNotePdfSchema,
    meta: metaSchema,
  });
