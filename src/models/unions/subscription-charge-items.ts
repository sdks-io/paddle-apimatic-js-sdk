import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { catalogItem1Schema, type CatalogItem1 } from "../catalog-item1.js";
import {
  nonCatalogPriceAndProduct1Schema,
  type NonCatalogPriceAndProduct1,
} from "../non-catalog-price-and-product1.js";
import {
  nonCatalogPriceForAnExistingProduct1Schema,
  type NonCatalogPriceForAnExistingProduct1,
} from "../non-catalog-price-for-an-existing-product1.js";

export type SubscriptionChargeItems =
  | CatalogItem1
  | NonCatalogPriceForAnExistingProduct1
  | NonCatalogPriceAndProduct1;

export const subscriptionChargeItemsSchema: Schema<SubscriptionChargeItems> = s.of<SubscriptionChargeItems>(
  s.union([
    s.lazy(() => catalogItem1Schema),
    s.lazy(() => nonCatalogPriceForAnExistingProduct1Schema),
    s.lazy(() => nonCatalogPriceAndProduct1Schema),
  ]),
);
