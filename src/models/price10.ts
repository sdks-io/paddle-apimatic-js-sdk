import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CatalogType, catalogTypeSchema } from "./catalog-type.js";
import { duration1Schema, type Duration1 } from "./duration1.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { money1Schema, type Money1 } from "./money1.js";
import { priceQuantity1Schema, type PriceQuantity1 } from "./price-quantity1.js";
import { priceTrialDuration3Schema, type PriceTrialDuration3 } from "./price-trial-duration3.js";
import { Status, statusSchema } from "./status.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { unitPriceOverride1Schema, type UnitPriceOverride1 } from "./unit-price-override1.js";

/** Represents a price entity. */
export type Price10 = {
  /** Unique Paddle ID for this price, prefixed with `pri_`. */
  id: string;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /**
   * Type of item. Standard items are considered part of your catalog and are shown in the Paddle
   * dashboard.
   *
   * @default CatalogType.Standard
   */
  type?: CatalogType;
  name: string | null;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle: Duration1 | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod: PriceTrialDuration3 | null;
  /** How tax is calculated for this price. @default TaxMode.AccountSetting */
  taxMode?: TaxMode;
  /**
   * Base price. This price applies to all customers, except for customers located in countries
   * where you have `unit_price_overrides`.
   */
  unitPrice: Money1;
  /**
   * List of unit price overrides. Use to override the base price with a custom price and currency
   * for a country or group of countries.
   */
  unitPriceOverrides: UnitPriceOverride1[];
  /**
   * Limits on how many times the related product can be purchased at this price. Useful for
   * discount campaigns.
   */
  quantity: PriceQuantity1;
  /** Whether this entity can be used in Paddle. @default Status.Active */
  status?: Status;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta | null;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
};

export const price10Schema: Schema<Price10> = s.object<Price10>({
  id: s.string(),
  productId: s.string(),
  description: s.string(),
  type: s.defaulted(catalogTypeSchema, CatalogType.Standard),
  name: s.nullable(s.string()),
  billingCycle: s.nullable(s.lazy(() => duration1Schema)),
  trialPeriod: s.nullable(s.lazy(() => priceTrialDuration3Schema)),
  taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
  unitPrice: money1Schema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverride1Schema)),
  quantity: priceQuantity1Schema,
  status: s.defaulted(statusSchema, Status.Active),
  customData: s.nullable(s.record(s.string(), s.unknown())),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
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
