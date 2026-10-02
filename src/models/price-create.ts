import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { billingCycle2Schema, type BillingCycle2 } from "./unions/billing-cycle2.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { nameSchema, type Name } from "./unions/name.js";
import { trialPeriod2Schema, type TrialPeriod2 } from "./unions/trial-period2.js";
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
  name?: Name;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /**
   * How often this price should be charged. `null` if price is non-recurring (one-time). If
   * omitted, defaults to `null`.
   */
  billingCycle?: BillingCycle2;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`. If omitted, defaults to
   * `null`.
   */
  trialPeriod?: TrialPeriod2;
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
  customData?: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta1;
};

export const priceCreateSchema: Schema<PriceCreate> = s.object<PriceCreate>({
  id: s.optional(s.string()),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.optional(s.lazy(() => nameSchema)),
  productId: s.string(),
  billingCycle: s.optional(s.lazy(() => billingCycle2Schema)),
  trialPeriod: s.optional(s.lazy(() => trialPeriod2Schema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: moneySchema,
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
  quantity: s.optional(s.lazy(() => priceQuantitySchema)),
  customData: s.optional(s.lazy(() => customDataSchema)),
  importMeta: s.optional(s.lazy(() => importMeta1Schema)),
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
