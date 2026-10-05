import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prorationSchema, type Proration } from "./proration.js";
import {
  transactionPriceCreateWithProductSchema,
  type TransactionPriceCreateWithProduct,
} from "./transaction-price-create-with-product.js";

/**
 * Add a non-catalog price for a non-catalog product in your catalog to a transaction. In this case,
 * the product and price that you're billing for are specific to this transaction.
 */
export type NonCatalogPriceAndProduct3 = {
  /** Quantity of this item on the transaction. */
  quantity: number;
  /**
   * Whether this item should be included in totals for this transaction preview. Typically used to
   * exclude one-time charges from calculations.
   *
   * @default true
   */
  includeInTotals?: boolean;
  /** How proration was calculated for this item. `null` for transaction previews. */
  proration?: Proration | null;
  /**
   * Price object for a non-catalog item to preview charging for. Include a `product` object to
   * create a non-catalog product for this non-catalog price.
   */
  price: TransactionPriceCreateWithProduct;
};

export const nonCatalogPriceAndProduct3Schema: Schema<NonCatalogPriceAndProduct3> =
  s.object<NonCatalogPriceAndProduct3>({
    quantity: s.int(),
    includeInTotals: s.defaulted(s.boolean(), true),
    proration: s.optionalNullable(s.lazy(() => prorationSchema)),
    price: transactionPriceCreateWithProductSchema,
    _keysMap: {
      includeInTotals: "include_in_totals",
    },
  });
