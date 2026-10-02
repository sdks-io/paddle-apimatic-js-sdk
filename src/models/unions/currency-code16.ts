import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "../currency-code.js";

/** Supported three-letter ISO 4217 currency code of the subscription when it was created. */
export type CurrencyCode16 = CurrencyCode;

export const currencyCode16Schema: Schema<CurrencyCode16> = s.of<CurrencyCode16>(
  s.union([s.lazy(() => currencyCodeSchema)]),
);
