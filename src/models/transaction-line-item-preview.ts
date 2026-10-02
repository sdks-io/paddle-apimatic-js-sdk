import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productPreviewSchema, type ProductPreview } from "./product-preview.js";
import { totalsSchema, type Totals } from "./totals.js";
import { priceIdSchema, type PriceId } from "./unions/price-id.js";
import { proration12Schema, type Proration12 } from "./unions/proration12.js";

/**
 * Information about line items for this transaction preview. Different from transaction preview
 * `items` as they include totals calculated by Paddle. Considered the source of truth for line item
 * totals.
 */
export type TransactionLineItemPreview = {
  /**
   * Paddle ID for the price related to this transaction line item, prefixed with `pri_`. The value
   * is null for custom prices being previewed.
   */
  priceId: PriceId;
  /** Quantity of this transaction line item. */
  quantity: number;
  /** Rate used to calculate tax for this transaction line item. */
  taxRate: string;
  /**
   * Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for
   * USD).
   */
  unitTotals: Totals;
  totals: Totals;
  /** Related product entity for this transaction line item price. */
  product: ProductPreview;
  /** How proration was calculated for this item. */
  proration: Proration12;
};

export const transactionLineItemPreviewSchema: Schema<TransactionLineItemPreview> =
  s.object<TransactionLineItemPreview>({
    priceId: priceIdSchema,
    quantity: s.number(),
    taxRate: s.string(),
    unitTotals: totalsSchema,
    totals: totalsSchema,
    product: productPreviewSchema,
    proration: proration12Schema,
    _keysMap: {
      priceId: "price_id",
      taxRate: "tax_rate",
      unitTotals: "unit_totals",
    },
  });
