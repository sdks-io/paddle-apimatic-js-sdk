import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogTypeSchema, type CatalogType } from "./catalog-type.js";
import { duration1Schema, type Duration1 } from "./duration1.js";
import { importMetaSchema, type ImportMeta } from "./import-meta.js";
import { money1Schema, type Money1 } from "./money1.js";
import { priceQuantity1Schema, type PriceQuantity1 } from "./price-quantity1.js";
import { priceTrialDuration3Schema, type PriceTrialDuration3 } from "./price-trial-duration3.js";
import { statusSchema, type Status } from "./status.js";
import { taxModeSchema, type TaxMode } from "./tax-mode.js";
import { unitPriceOverride1Schema, type UnitPriceOverride1 } from "./unit-price-override1.js";

/** New or changed entity. */
export type Data29 = {
  /** Unique Paddle ID for this price, prefixed with `pri_`. */
  id: string;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  type: CatalogType | null;
  /**
   * Name of this price, shown to customers at checkout and on invoices. Typically describes how
   * often the related product bills.
   */
  name: string | null;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle: Duration1 | null;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod: PriceTrialDuration3 | null;
  /** How tax is calculated for this price. */
  taxMode: TaxMode;
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
  /** Whether this entity can be used in Paddle. */
  status: Status;
  /** Your own structured key-value data. */
  customData: Record<string, unknown> | null;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export const data29Schema: Schema<Data29> = s.object<Data29>({
  id: s.string(),
  productId: s.string(),
  description: s.string(),
  type: s.nullable(s.lazy(() => catalogTypeSchema)),
  name: s.nullable(s.string()),
  billingCycle: s.nullable(s.lazy(() => duration1Schema)),
  trialPeriod: s.nullable(s.lazy(() => priceTrialDuration3Schema)),
  taxMode: taxModeSchema,
  unitPrice: money1Schema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverride1Schema)),
  quantity: priceQuantity1Schema,
  status: statusSchema,
  customData: s.nullable(s.record(s.string(), s.unknown())),
  importMeta: s.nullable(s.lazy(() => importMetaSchema)),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
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
