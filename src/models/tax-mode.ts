import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How tax is calculated for this price. */
export const TaxMode = {
  /** "account_setting": { "description": "Prices use the setting from your account." } */
  AccountSetting: "account_setting",
  /** "external": { "description": "Prices are exclusive of tax." } */
  External: "external",
  /** "internal": { "description": "Prices are inclusive of tax." } */
  Internal: "internal",
  /**
   * "location": { "description": "Prices are inclusive or exclusive of tax, depending on the
   * country of the transaction." }
   */
  Location: "location",
} as const;
export type TaxMode = (typeof TaxMode)[keyof typeof TaxMode] | (string & {});

export const taxModeSchema: EnumSchema<TaxMode> = s.enumOf<TaxMode>(TaxMode);
