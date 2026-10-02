import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationIntervalSchema, type DurationInterval } from "./duration-interval.js";
import { unitPriceSchema, type UnitPrice } from "./unions/unit-price.js";
import { unitPriceTrialOverrideSchema, type UnitPriceTrialOverride } from "./unit-price-trial-override.js";

export type PriceTrialDuration2 = {
  /** Unit of time. */
  interval?: DurationInterval;
  /** Amount of time. */
  frequency?: number;
  /** @default true */
  requiresPaymentMethod?: boolean;
  /**
   * Trial price. Customers are billed this amount for the duration of the trial period. Applies to
   * all customers except those in countries with `unit_price_overrides`. If `null`, customers are
   * not charged during the trial.
   */
  unitPrice?: UnitPrice;
  /**
   * List of unit price overrides for trial pricing. Use to override base trial price with a custom
   * trial price and currency for a country or group of countries.
   */
  unitPriceOverrides?: UnitPriceTrialOverride[];
};

export const priceTrialDuration2Schema: Schema<PriceTrialDuration2> = s.object<PriceTrialDuration2>({
  interval: s.optional(s.lazy(() => durationIntervalSchema)),
  frequency: s.optional(s.number()),
  requiresPaymentMethod: s.defaulted(s.boolean(), true),
  unitPrice: s.optional(s.lazy(() => unitPriceSchema)),
  unitPriceOverrides: s.optional(s.array(s.lazy(() => unitPriceTrialOverrideSchema))),
  _keysMap: {
    requiresPaymentMethod: "requires_payment_method",
    unitPrice: "unit_price",
    unitPriceOverrides: "unit_price_overrides",
  },
});
