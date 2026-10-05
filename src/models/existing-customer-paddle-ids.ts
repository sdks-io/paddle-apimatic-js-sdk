import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { discountCustomSchema, type DiscountCustom } from "./discount-custom.js";
import {
  transactionPreviewCreateItemsSchema,
  type TransactionPreviewCreateItems,
} from "./unions/transaction-preview-create-items.js";

/**
 * Paddle uses existing customer data to calculate totals. Typically used for logged-in customers.
 */
export type ExistingCustomerPaddleIDs = {
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode?: CurrencyCode | null;
  /** Paddle ID of the discount to apply to this transaction preview, prefixed with `dsc_`. */
  discountId?: string | null;
  /** Apply a non-catalog discount to a transaction. Send one of `discount_id` or `discount`. */
  discount?: DiscountCustom | null;
  /**
   * Whether trials should be ignored for transaction preview calculations.
   *
   * By default, recurring items with trials are considered to have a zero charge when previewing.
   * Set to `true` to disable this.
   *
   * @default false
   */
  ignoreTrials?: boolean;
  /**
   * List of items to preview charging for. You can preview charging for items that you've added to
   * your catalog by passing the Paddle ID of an existing price entity, or you can preview charging
   * for non-catalog items by passing a price object.
   *
   * Non-catalog items can be for existing products, or you can pass a product object as part of
   * your price to preview charging for a non-catalog product.
   */
  items: TransactionPreviewCreateItems[];
  /** Paddle ID of the customer that this transaction preview is for, prefixed with `ctm_`. */
  customerId: string;
  /**
   * Paddle ID of the address that this transaction preview is for, prefixed with `add_`. Requires
   * `customer_id`.
   */
  addressId: string;
  /** Paddle ID of the business that this transaction preview is for, prefixed with `biz_`. */
  businessId?: string | null;
};

export const existingCustomerPaddleIDsSchema: Schema<ExistingCustomerPaddleIDs> =
  s.object<ExistingCustomerPaddleIDs>({
    currencyCode: s.optionalNullable(s.lazy(() => currencyCodeSchema)),
    discountId: s.optionalNullable(s.string()),
    discount: s.optionalNullable(s.lazy(() => discountCustomSchema)),
    ignoreTrials: s.defaulted(s.boolean(), false),
    items: s.array(s.lazy(() => transactionPreviewCreateItemsSchema)),
    customerId: s.string(),
    addressId: s.string(),
    businessId: s.optionalNullable(s.string()),
    _keysMap: {
      currencyCode: "currency_code",
      discountId: "discount_id",
      ignoreTrials: "ignore_trials",
      customerId: "customer_id",
      addressId: "address_id",
      businessId: "business_id",
    },
  });
