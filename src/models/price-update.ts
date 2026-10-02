import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { statusSchema, type Status } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { billingCycleSchema, type BillingCycle } from "./unions/billing-cycle.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { nameSchema, type Name } from "./unions/name.js";
import { trialPeriod5Schema, type TrialPeriod5 } from "./unions/trial-period5.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price entity when updating prices. */
export type PriceUpdate = {
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description?: string;
  /** @default CatalogType.Standard */
  type?: CatalogType;
  name?: Name;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle?: BillingCycle;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod?: TrialPeriod5;
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
  customData?: CustomData;
};

export const priceUpdateSchema: Schema<PriceUpdate> = s.object<PriceUpdate>({
  description: s.optional(s.string()),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.optional(s.lazy(() => nameSchema)),
  billingCycle: s.optional(s.lazy(() => billingCycleSchema)),
  trialPeriod: s.optional(s.lazy(() => trialPeriod5Schema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: s.optional(s.lazy(() => moneySchema)),
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
  quantity: s.optional(s.lazy(() => priceQuantitySchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  _keysMap: {
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    taxMode: "tax_mode",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
    customData: "custom_data",
  },
});
