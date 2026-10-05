import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";
import {
  moneyWithOptionalCurrencySchema,
  type MoneyWithOptionalCurrency,
} from "./money-with-optional-currency.js";
import { unitPriceTrialOverride1Schema, type UnitPriceTrialOverride1 } from "./unit-price-trial-override1.js";

export type PriceTrialDuration3 = {
  /** Unit of time. */
  interval: Interval;
  /** Amount of time. */
  frequency: number;
  /**
   * Whether this price requires a payment method (`true`) or not (`false`) when trialing. If
   * `false`, customers can sign up for subscription without entering their payment details, often
   * referred to as a "cardless trial."
   *
   * @default true
   */
  requiresPaymentMethod?: boolean;
  /**
   * Trial price. Customers are billed this amount for the duration of the trial period. Applies to
   * all customers except those in countries with `unit_price_overrides`. If `null`, customers are
   * not charged during the trial.
   */
  unitPrice?: MoneyWithOptionalCurrency | null;
  /**
   * List of unit price overrides for trial pricing. Use to override base trial price with a custom
   * trial price and currency for a country or group of countries.
   */
  unitPriceOverrides?: UnitPriceTrialOverride1[];
};

export const priceTrialDuration3Schema: Schema<PriceTrialDuration3> = s.object<PriceTrialDuration3>({
  interval: intervalSchema,
  frequency: s.int(),
  requiresPaymentMethod: s.defaulted(s.boolean(), true),
  unitPrice: s.optionalNullable(s.lazy(() => moneyWithOptionalCurrencySchema)),
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceTrialOverride1Schema))),
  _keysMap: {
    requiresPaymentMethod: "requires_payment_method",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
  },
});
