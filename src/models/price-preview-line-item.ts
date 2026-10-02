import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricePreviewDiscountsSchema, type PricePreviewDiscounts } from "./price-preview-discounts.js";
import { priceSchema, type Price } from "./price.js";
import { productSchema, type Product } from "./product.js";
import { totalsSchema, type Totals } from "./totals.js";

/**
 * Information about line items for this preview. Includes totals calculated by Paddle. Considered
 * the source of truth for line item totals.
 */
export type PricePreviewLineItem = {
  /** Related price entity for this preview line item. */
  price: Price;
  /** Quantity of this preview line item. */
  quantity: number;
  /** Rate used to calculate tax for this preview line item. */
  taxRate: string;
  /**
   * Breakdown of the charge for one unit in the lowest denomination of a currency (e.g. cents for
   * USD).
   */
  unitTotals: Totals;
  /** Breakdown of the charge for one unit in the format of a given currency. */
  formattedUnitTotals: Totals;
  /** Breakdown of a charge in the lowest denomination of a currency (e.g. cents for USD). */
  totals: Totals;
  /** The financial breakdown of a charge in the format of a given currency. */
  formattedTotals: Totals;
  /** Related product entity for this preview line item price. */
  product: Product;
  discounts: PricePreviewDiscounts[];
};

export const pricePreviewLineItemSchema: Schema<PricePreviewLineItem> = s.object<PricePreviewLineItem>({
  price: priceSchema,
  quantity: s.number(),
  taxRate: s.string(),
  unitTotals: totalsSchema,
  formattedUnitTotals: totalsSchema,
  totals: totalsSchema,
  formattedTotals: totalsSchema,
  product: productSchema,
  discounts: s.array(s.lazy(() => pricePreviewDiscountsSchema)),
  _keysMap: {
    taxRate: "tax_rate",
    unitTotals: "unit_totals",
    formattedUnitTotals: "formatted_unit_totals",
    formattedTotals: "formatted_totals",
  },
});
