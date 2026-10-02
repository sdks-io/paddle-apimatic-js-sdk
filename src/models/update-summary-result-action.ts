import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the subscription change results in a prorated credit or a charge. */
export const UpdateSummaryResultAction = {
  /** "credit": { "description": "Changes to the subscription results in a prorated credit." } */
  Credit: "credit",
  /** "charge": { "description": "Changes to the subscription results in a prorated charge." } */
  Charge: "charge",
} as const;
export type UpdateSummaryResultAction =
  | (typeof UpdateSummaryResultAction)[keyof typeof UpdateSummaryResultAction]
  | (string & {});

export const updateSummaryResultActionSchema: EnumSchema<UpdateSummaryResultAction> =
  s.enumOf<UpdateSummaryResultAction>(UpdateSummaryResultAction);
