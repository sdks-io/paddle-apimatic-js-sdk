import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { durationSchema, type Duration } from "./duration.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { priceTrialDuration2Schema, type PriceTrialDuration2 } from "./price-trial-duration2.js";
import { statusSchema, type Status } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price entity when updating prices. */
export type PriceUpdate = {
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description?: string;
  /** @default CatalogType.Standard */
  type?: CatalogType;
  name?: string | null;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle?: Duration | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod?: PriceTrialDuration2 | null;
  /** @default TaxMode.AccountSetting */
  taxMode?: TaxMode;
  /**
   * Base price. This price applies to all customers, except for customers located in countries
   * where you have `unit_price_overrides`.
   */
  unitPrice?: Money;
  /**
   * List of unit price overrides. Use to override the base price with a custom price and currency
   * for a country or group of countries.
   */
  unitPriceOverrides?: UnitPriceOverride[];
  /**
   * Limits on how many times the related product can be purchased at this price. Useful for
   * discount campaigns.
   */
  quantity?: PriceQuantity;
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
};

export const priceUpdateSchema: Schema<PriceUpdate> = s.object<PriceUpdate>({
  description: s.optional(s.string()),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.optionalNullable(s.string()),
  billingCycle: s.optionalNullable(s.lazy(() => durationSchema)),
  trialPeriod: s.optionalNullable(s.lazy(() => priceTrialDuration2Schema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: s.optional(s.lazy(() => moneySchema)),
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
  quantity: s.optional(s.lazy(() => priceQuantitySchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    taxMode: "tax_mode",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
    customData: "custom_data",
  },
});
