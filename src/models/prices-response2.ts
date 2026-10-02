import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  priceWithProductCollectionIncludesSchema,
  type PriceWithProductCollectionIncludes,
} from "./price-with-product-collection-includes.js";

export type PricesResponse2 = {
  /** Represents a price entity with included entities, including product collections. */
  data: PriceWithProductCollectionIncludes;
  /** Information about this response. */
  meta: Meta;
};

export const pricesResponse2Schema: Schema<PricesResponse2> = s.object<PricesResponse2>({
  data: priceWithProductCollectionIncludesSchema,
  meta: metaSchema,
});
