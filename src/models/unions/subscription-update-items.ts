import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { catalogItemSchema, type CatalogItem } from "../catalog-item.js";
import {
  nonCatalogPriceAndProductSchema,
  type NonCatalogPriceAndProduct,
} from "../non-catalog-price-and-product.js";
import {
  nonCatalogPriceForAnExistingProductSchema,
  type NonCatalogPriceForAnExistingProduct,
} from "../non-catalog-price-for-an-existing-product.js";

export type SubscriptionUpdateItems =
  | CatalogItem
  | NonCatalogPriceForAnExistingProduct
  | NonCatalogPriceAndProduct;

export const subscriptionUpdateItemsSchema: Schema<SubscriptionUpdateItems> = s.of<SubscriptionUpdateItems>(
  s.union([
    s.lazy(() => catalogItemSchema),
    s.lazy(() => nonCatalogPriceForAnExistingProductSchema),
    s.lazy(() => nonCatalogPriceAndProductSchema),
  ]),
);
