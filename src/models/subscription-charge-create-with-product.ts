import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { priceQuantitySchema, type PriceQuantity } from "./price-quantity.js";
import { TaxMode, taxModeSchema } from "./tax-mode.js";
import {
  transactionSubscriptionProductCreateSchema,
  type TransactionSubscriptionProductCreate,
} from "./transaction-subscription-product-create.js";
import { unitPriceOverrideSchema, type UnitPriceOverride } from "./unit-price-override.js";

/**
 * Price object for a non-catalog item to charge for. Include a `product` object to create a
 * non-catalog product for this non-catalog price.
 */
export type SubscriptionChargeCreateWithProduct = {
  /** Internal description for this price, not shown to customers. Typically notes for your team. */
  description: string;
  /**
   * Name of this price, shown to customers at checkout and on invoices. Typically describes how
   * often the related product bills.
   */
  name?: string | null;
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
  customData?: Record<string, unknown> | null;
  /** Product object for a non-catalog item to charge for. */
  product: TransactionSubscriptionProductCreate;
};

export const subscriptionChargeCreateWithProductSchema: Schema<SubscriptionChargeCreateWithProduct> =
  s.object<SubscriptionChargeCreateWithProduct>({
    description: s.string(),
    name: s.optionalNullable(s.string()),
    taxMode: s.defaulted(taxModeSchema, TaxMode.AccountSetting),
    unitPrice: moneySchema,
    unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceOverrideSchema))),
    quantity: s.optional(s.lazy(() => priceQuantitySchema)),
    customData: s.optionalNullable(s.record(s.string(), s.unknown())),
    product: transactionSubscriptionProductCreateSchema,
    _keysMap: {
      taxMode: "tax_mode",
      unitPrice: "unit_price",
      unitPriceOverrides: "unit_price_overrides",
      customData: "custom_data",
    },
  });
