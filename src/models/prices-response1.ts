import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { priceSchema, type Price } from "./price.js";

export type PricesResponse1 = {
  /** Represents a price entity. */
  data: Price;
  /** Information about this response. */
  meta: Meta;
};

export const pricesResponse1Schema: Schema<PricesResponse1> = s.object<PricesResponse1>({
  data: priceSchema,
  meta: metaSchema,
});
