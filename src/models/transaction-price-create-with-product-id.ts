import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import { billingCycleSchema, type BillingCycle } from "./unions/billing-cycle.js";
import { customDataSchema, type CustomData } from "./unions/custom-data.js";
import { name5Schema, type Name5 } from "./unions/name5.js";
import { trialPeriod1Schema, type TrialPeriod1 } from "./unions/trial-period1.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

export type TransactionPriceCreateWithProductId = {
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /**
   * Name of this price, shown to customers at checkout and on invoices. Typically describes how
   * often the related product bills.
   */
  name?: Name5;
  /** How often this price should be charged. `null` if price is non-recurring (one-time). */
  billingCycle?: BillingCycle;
  /**
   * Trial period for the product related to this price. The billing cycle begins once the trial
   * period is over. `null` for no trial period. Requires `billing_cycle`.
   */
  trialPeriod?: TrialPeriod1;
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
  unitPriceOverrides?: UnitPriceOverride[];
  /**
   * Limits on how many times the related product can be purchased at this price. Useful for
   * discount campaigns. If omitted, defaults to 1-100.
   */
  quantity?: PriceQuantity;
  /** Your own structured key-value data. */
  customData?: CustomData;
  /** Paddle ID for the product that this price is for, prefixed with `pro_`. */
  productId: string;
};

export const transactionPriceCreateWithProductIdSchema: Schema<TransactionPriceCreateWithProductId> =
  s.object<TransactionPriceCreateWithProductId>({
    description: s.string(),
    name: s.optional(s.lazy(() => name5Schema)),
    billingCycle: s.optional(s.lazy(() => billingCycleSchema)),
    trialPeriod: s.optional(s.lazy(() => trialPeriod1Schema)),
    taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
    unitPrice: moneySchema,
    unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
    quantity: s.optional(s.lazy(() => priceQuantitySchema)),
    customData: s.optional(s.lazy(() => customDataSchema)),
    productId: s.string(),
    _keysMap: {
      billingCycle: "billing_cycle",
      trialPeriod: "trial_period",
      taxMode: "tax_mode",
      unitPrice: "unit_price",
      unitPriceOverrides: "unit_price_overrides",
      customData: "custom_data",
      productId: "product_id",
    },
  });
