import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { Status, statusSchema } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { billingCycleSchema, type BillingCycle } from "./unions/billing-cycle.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { nameSchema, type Name } from "./unions/name.js";
import { trialPeriodSchema, type TrialPeriod } from "./unions/trial-period.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price entity. */
export type Price = {
  id: string;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /** @default CatalogType.Standard */
  type?: CatalogType;
  name: Name;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle: BillingCycle;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod: TrialPeriod;
  /** @default TaxMode.AccountSetting */
  taxMode?: TaxMode;
  /**
   * Base price. This price applies to all customers, except for customers located in countries
   * where you have `unit_price_overrides`.
   */
  unitPrice: Money;
  /**
   * List of unit price overrides. Use to override the base price with a custom price and currency
   * for a country or group of countries.
   */
  unitPriceOverrides: UnitPriceOverride[];
  /**
   * Limits on how many times the related product can be purchased at this price. Useful for
   * discount campaigns.
   */
  quantity: PriceQuantity;
  /** @default Status.Active */
  status?: Status;
  /** Your own structured key-value data. */
  customData: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  createdAt: Date;
  updatedAt: Date;
};

export const priceSchema: Schema<Price> = s.object<Price>({
  id: s.string(),
  productId: s.string(),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: nameSchema,
  billingCycle: billingCycleSchema,
  trialPeriod: trialPeriodSchema,
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: moneySchema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverrideSchema)),
  quantity: priceQuantitySchema,
  status: s.defaulted(statusSchema, Status.Active),
  customData: customDataSchema,
  importMeta: importMeta1Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    taxMode: "tax_mode",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
    customData: "custom_data",
    importMeta: "import_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
