import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { money1Schema, type Money1 } from "./money1.js";
import { priceQuantity1Schema, type PriceQuantity1 } from "./price-quantity1.js";
import { statusSchema, type Status } from "./status.js";
import { taxModeSchema, type TaxMode } from "./tax-mode.js";
import { billingCycleSchema, type BillingCycle } from "./unions/billing-cycle.js";
import { createdAtSchema, type CreatedAt } from "./unions/created-at.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";
import { name5Schema, type Name5 } from "./unions/name5.js";
import { trialPeriodSchema, type TrialPeriod } from "./unions/trial-period.js";
import { type2Schema, type Type2 } from "./unions/type2.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";
import { unitPriceOverride1Schema, type UnitPriceOverride1 } from "./unit-price-override1.js";

/** New or changed entity. */
export type Data29 = {
  /** Unique Paddle ID for this price, prefixed with `pri_`. */
  id: string;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  type: Type2;
  /**
   * Name of this price, shown to customers at checkout and on invoices. Typically describes how
   * often the related product bills.
   */
  name: Name5;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle: BillingCycle;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod: TrialPeriod;
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
  customData: CustomData;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
  createdAt: CreatedAt;
  updatedAt: UpdatedAt;
};

export const data29Schema: Schema<Data29> = s.object<Data29>({
  id: s.string(),
  productId: s.string(),
  description: s.string(),
  type: type2Schema,
  name: name5Schema,
  billingCycle: billingCycleSchema,
  trialPeriod: trialPeriodSchema,
  taxMode: taxModeSchema,
  unitPrice: money1Schema,
  unitPriceOverrides: s.array(s.lazy(() => unitPriceOverride1Schema)),
  quantity: priceQuantity1Schema,
  status: statusSchema,
  customData: customDataSchema,
  importMeta: importMeta1Schema,
  createdAt: createdAtSchema,
  updatedAt: updatedAtSchema,
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
