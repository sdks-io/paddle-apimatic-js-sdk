import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the amounts to be adjusted are inclusive or exclusive of tax. If `internal`, adjusted
 * amounts are considered to be inclusive of tax. If `external`, Paddle calculates the tax and adds
 * it to the amounts provided.
 *
 * Only valid for adjustments where the `type` is `partial`.
 *
 * If omitted, defaults to `internal`.
 */
export const AdjustmentTaxMode = {
  /** "external": { "description": "Amounts are exclusive of tax." } */
  External: "external",
  /** "internal": { "description": "Amounts are inclusive of tax." } */
  Internal: "internal",
} as const;
export type AdjustmentTaxMode = (typeof AdjustmentTaxMode)[keyof typeof AdjustmentTaxMode] | (string & {});

export const adjustmentTaxModeSchema: EnumSchema<AdjustmentTaxMode> =
  s.enumOf<AdjustmentTaxMode>(AdjustmentTaxMode);
