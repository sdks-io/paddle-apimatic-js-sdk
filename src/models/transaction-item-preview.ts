import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricePreviewSchema, type PricePreview } from "./price-preview.js";
import { proration18Schema, type Proration18 } from "./unions/proration18.js";

export type TransactionItemPreview = {
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
  proration: Proration18;
  price: PricePreview;
};

export const transactionItemPreviewSchema: Schema<TransactionItemPreview> = s.object<TransactionItemPreview>({
  quantity: s.number(),
  includeInTotals: s.defaulted(s.boolean(), true),
  proration: proration18Schema,
  price: pricePreviewSchema,
  _keysMap: {
    includeInTotals: "include_in_totals",
  },
});
