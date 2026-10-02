import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { catalogItem2Schema, type CatalogItem2 } from "../catalog-item2.js";
import {
  nonCatalogPriceAndProduct2Schema,
  type NonCatalogPriceAndProduct2,
} from "../non-catalog-price-and-product2.js";
import {
  nonCatalogPriceForAnExistingProduct2Schema,
  type NonCatalogPriceForAnExistingProduct2,
} from "../non-catalog-price-for-an-existing-product2.js";

export type TransactionItemUpdate =
  | CatalogItem2
  | NonCatalogPriceForAnExistingProduct2
  | NonCatalogPriceAndProduct2;

export const transactionItemUpdateSchema: Schema<TransactionItemUpdate> = s.of<TransactionItemUpdate>(
  s.union([
    s.lazy(() => catalogItem2Schema),
    s.lazy(() => nonCatalogPriceForAnExistingProduct2Schema),
    s.lazy(() => nonCatalogPriceAndProduct2Schema),
  ]),
);
