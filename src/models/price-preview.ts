import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { durationSchema, type Duration } from "./duration.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { Status, statusSchema } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price preview entity. */
export type PricePreview = {
  /**
   * Unique Paddle ID for this price, prefixed with `pri_`. The value is null for custom prices
   * being previewed.
   */
  id?: string | null;
  /**
   * Paddle ID for the product that this price is for, prefixed with `pro_`. The value is null for
   * custom products being previewed.
   */
  productId?: string | null;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /** @default CatalogType.Standard */
  type?: CatalogType;
  name?: string | null;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle?: Duration | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod?: Duration | null;
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
  customData?: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta?: ImportMeta | null;
  createdAt: Date;
  updatedAt: Date;
};

export const pricePreviewSchema: Schema<PricePreview> = s.object<PricePreview>({
  id: s.optionalNullable(s.string()),
  productId: s.optionalNullable(s.string()),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.optionalNullable(s.string()),
  billingCycle: s.optionalNullable(s.lazy(() => durationSchema)),
  trialPeriod: s.optionalNullable(s.lazy(() => durationSchema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: moneySchema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverrideSchema)),
  quantity: priceQuantitySchema,
  status: s.defaulted(statusSchema, Status.Active),
  customData: s.optionalNullable(s.record(s.string(), s.unknown())),
  importMeta: s.optionalNullable(s.lazy(() => importMetaSchema)),
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
