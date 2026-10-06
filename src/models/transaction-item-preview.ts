import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricePreviewSchema, type PricePreview } from "./price-preview.js";
import { prorationSchema, type Proration } from "./proration.js";

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
  proration?: Proration | null;
  price: PricePreview;
};

export const transactionItemPreviewSchema: Schema<TransactionItemPreview> = s.object<TransactionItemPreview>({
  quantity: s.int(),
  includeInTotals: s.defaulted(s.boolean(), true),
  proration: s.optionalNullable(s.lazy(() => prorationSchema)),
  price: pricePreviewSchema,
  _keysMap: {
    includeInTotals: "include_in_totals",
  },
});
