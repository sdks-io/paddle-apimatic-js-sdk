import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { catalogItem3Schema, type CatalogItem3 } from "../catalog-item3.js";
import {
  nonCatalogPriceAndProduct3Schema,
  type NonCatalogPriceAndProduct3,
} from "../non-catalog-price-and-product3.js";
import {
  nonCatalogPriceForAnExistingProduct3Schema,
  type NonCatalogPriceForAnExistingProduct3,
} from "../non-catalog-price-for-an-existing-product3.js";

export type TransactionPreviewCreateItems =
  | CatalogItem3
  | NonCatalogPriceForAnExistingProduct3
  | NonCatalogPriceAndProduct3;

export const transactionPreviewCreateItemsSchema: Schema<TransactionPreviewCreateItems> =
  s.of<TransactionPreviewCreateItems>(
    s.union([
      s.lazy(() => catalogItem3Schema),
      s.lazy(() => nonCatalogPriceForAnExistingProduct3Schema),
      s.lazy(() => nonCatalogPriceAndProduct3Schema),
    ]),
  );
