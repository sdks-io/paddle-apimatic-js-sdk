import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressPreviewSchema, type AddressPreview } from "./address-preview.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { paymentMethodType1Schema, type PaymentMethodType1 } from "./payment-method-type1.js";
import {
  transactionDetailsPreviewSchema,
  type TransactionDetailsPreview,
} from "./transaction-details-preview.js";
import { transactionItemPreviewSchema, type TransactionItemPreview } from "./transaction-item-preview.js";

/** Represents a transaction entity when previewing transactions. */
export type TransactionPreview = {
  /** Paddle ID of the customer that this transaction preview is for, prefixed with `ctm_`. */
  customerId: string | null;
  /**
   * Paddle ID of the address that this transaction preview is for, prefixed with `add_`. Send one
   * of `address_id`, `customer_ip_address`, or the `address` object when previewing.
   */
  addressId: string | null;
  /** Paddle ID of the business that this transaction preview is for, prefixed with `biz_`. */
  businessId: string | null;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode: CurrencyCode;
  /** Paddle ID of the discount applied to this transaction preview, prefixed with `dsc_`. */
  discountId: string | null;
  /**
   * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or
   * the `address` object when previewing.
   */
  customerIpAddress: string | null;
  /**
   * Address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the
   * `address` object when previewing.
   */
  address: AddressPreview | null;
  /**
   * Whether trials should be ignored for transaction preview calculations.
   *
   * By default, recurring items with trials are considered to have a zero charge when previewing.
   * Set to `true` to disable this.
   *
   * @default false
   */
  ignoreTrials?: boolean;
  /** List of items to preview transaction calculations for. */
  items: TransactionItemPreview[];
  details: TransactionDetailsPreview;
  /**
   * List of available payment methods for Paddle Checkout given the price and location information
   * passed.
   */
  availablePaymentMethods: PaymentMethodType1[];
};

export const transactionPreviewSchema: Schema<TransactionPreview> = s.object<TransactionPreview>({
  customerId: s.nullable(s.string()),
  addressId: s.nullable(s.string()),
  businessId: s.nullable(s.string()),
  currencyCode: currencyCodeSchema,
  discountId: s.nullable(s.string()),
  customerIpAddress: s.nullable(s.string()),
  address: s.nullable(s.lazy(() => addressPreviewSchema)),
  ignoreTrials: s.defaulted(s.boolean(), false),
  items: s.array(s.lazy(() => transactionItemPreviewSchema)),
  details: transactionDetailsPreviewSchema,
  availablePaymentMethods: s.array(s.lazy(() => paymentMethodType1Schema)),
  _keysMap: {
    customerId: "customer_id",
    addressId: "address_id",
    businessId: "business_id",
    currencyCode: "currency_code",
    discountId: "discount_id",
    customerIpAddress: "customer_ip_address",
    ignoreTrials: "ignore_trials",
    availablePaymentMethods: "available_payment_methods",
  },
});
