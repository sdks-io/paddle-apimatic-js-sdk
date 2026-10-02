import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  moneyWithOptionalCurrencySchema,
  type MoneyWithOptionalCurrency,
} from "../money-with-optional-currency.js";

/**
 * Trial price. Customers are billed this amount for the duration of the trial period. Applies to
 * all customers except those in countries with `unit_price_overrides`. If `null`, customers are not
 * charged during the trial.
 */
export type UnitPrice = MoneyWithOptionalCurrency;

export const unitPriceSchema: Schema<UnitPrice> = s.of<UnitPrice>(
  s.union([s.lazy(() => moneyWithOptionalCurrencySchema)]),
);
