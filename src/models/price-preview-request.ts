import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressPreviewSchema, type AddressPreview } from "./address-preview.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { pricePreviewItemSchema, type PricePreviewItem } from "./price-preview-item.js";

export type PricePreviewRequest = {
  /** Paddle ID of the customer that this preview is for, prefixed with `ctm_`. */
  customerId?: string | null;
  /**
   * Paddle ID of the address that this preview is for, prefixed with `add_`. Send one of
   * `address_id`, `customer_ip_address`, or the `address` object when previewing.
   */
  addressId?: string | null;
  /** Paddle ID of the business that this preview is for, prefixed with `biz_`. */
  businessId?: string | null;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode?: CurrencyCode | null;
  /** Paddle ID of the discount applied to this preview, prefixed with `dsc_`. */
  discountId?: string | null;
  /**
   * Address for this preview. Send one of `address_id`, `customer_ip_address`, or the `address`
   * object when previewing.
   */
  address?: AddressPreview | null;
  /**
   * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or
   * the `address` object when previewing.
   */
  customerIpAddress?: string | null;
  /** List of items to preview price calculations for. */
  items: PricePreviewItem[];
};

export const pricePreviewRequestSchema: Schema<PricePreviewRequest> = s.object<PricePreviewRequest>({
  customerId: s.optionalNullable(s.string()),
  addressId: s.optionalNullable(s.string()),
  businessId: s.optionalNullable(s.string()),
  currencyCode: s.optionalNullable(s.lazy(() => currencyCodeSchema)),
  discountId: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.lazy(() => addressPreviewSchema)),
  customerIpAddress: s.optionalNullable(s.string()),
  items: s.array(s.lazy(() => pricePreviewItemSchema)),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    businessId: "business_id",
    currencyCode: "currency_code",
    discountId: "discount_id",
    customerIpAddress: "customer_ip_address",
  },
});
