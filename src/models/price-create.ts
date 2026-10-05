import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { durationSchema, type Duration } from "./duration.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { priceTrialDuration1Schema, type PriceTrialDuration1 } from "./price-trial-duration1.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price entity when creating prices. */
export type PriceCreate = {
  id?: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /**
   * Type of item. Standard items are considered part of your catalog and are shown in the Paddle
   * dashboard. If omitted, defaults to `standard`.
   *
   * @default CatalogType.Standard
   */
  type?: CatalogType;
  name?: string | null;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /**
   * How often this price should be charged. `null` if price is non-recurring (one-time). If
   * omitted, defaults to `null`.
   */
  billingCycle?: Duration | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`. If omitted, defaults to
   * `null`.
   */
  trialPeriod?: PriceTrialDuration1 | null;
  /**
   * How tax is calculated for this price. If omitted, defaults to `account_setting`.
   *
   * @default TaxMode.AccountSetting
   */
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
  unitPriceOverrides?: UnitPriceOverride[];
  /**
   * Limits on how many times the related product can be purchased at this price. Useful for
   * discount campaigns. If omitted, defaults to 1-100.
   */
  quantity?: PriceQuantity;
  /** Your own structured key-value data. */
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
};

export const priceCreateSchema: Schema<PriceCreate> = s.object<PriceCreate>({
  id: s.optional(s.string()),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.optionalNullable(s.string()),
  productId: s.string(),
  billingCycle: s.optionalNullable(s.lazy(() => durationSchema)),
  trialPeriod: s.optionalNullable(s.lazy(() => priceTrialDuration1Schema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: moneySchema,
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
  quantity: s.optional(s.lazy(() => priceQuantitySchema)),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
  _keysMap: {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    taxMode: "tax_mode",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
    customData: "custom_data",
    importMeta: "import_meta",
  },
});
