import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { durationSchema, type Duration } from "./duration.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { priceTrialDurationSchema, type PriceTrialDuration } from "./price-trial-duration.js";
import { productSchema, type Product } from "./product.js";
import { Status, statusSchema } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/** Represents a price entity with included entities. */
export type PriceIncludes = {
  id: string;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /** @default CatalogType.Standard */
  type?: CatalogType;
  name: string | null;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle: Duration | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod: PriceTrialDuration | null;
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
  customData: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta | null;
  createdAt: Date;
  updatedAt: Date;
  /**
   * Related product for this price. Returned when the `include` parameter is used with the
   * `product` value.
   */
  product?: Product;
};

export const priceIncludesSchema: Schema<PriceIncludes> = s.object<PriceIncludes>({
  id: s.string(),
  productId: s.string(),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.nullable(s.string()),
  billingCycle: s.nullable(s.lazy(() => durationSchema)),
  trialPeriod: s.nullable(s.lazy(() => priceTrialDurationSchema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: moneySchema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverrideSchema)),
  quantity: priceQuantitySchema,
  status: s.defaulted(statusSchema, Status.Active),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  product: s.optional(s.lazy(() => productSchema)),
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
