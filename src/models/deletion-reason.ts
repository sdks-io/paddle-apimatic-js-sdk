import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason why this payment method was deleted. */
export const DeletionReason = {
  /**
   * "replaced_by_newer_version": { "description": "Customer supplied payment details that matched
   * this saved payment method entity, so Paddle created a replacement entity and deleted this one."
   * }
   */
  ReplacedByNewerVersion: "replaced_by_newer_version",
  /** "api": { "description": "Saved payment method deleted using the API." } */
  Api: "api",
} as const;
export type DeletionReason = (typeof DeletionReason)[keyof typeof DeletionReason] | (string & {});

export const deletionReasonSchema: EnumSchema<DeletionReason> = s.enumOf<DeletionReason>(DeletionReason);
