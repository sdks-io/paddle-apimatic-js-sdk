import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { paymentMethodType1Schema, type PaymentMethodType1 } from "./payment-method-type1.js";
import {
  transactionDetailsPreviewSchema,
  type TransactionDetailsPreview,
} from "./transaction-details-preview.js";
import { transactionItemPreviewSchema, type TransactionItemPreview } from "./transaction-item-preview.js";
import { addressId11Schema, type AddressId11 } from "./unions/address-id11.js";
import { address13Schema, type Address13 } from "./unions/address13.js";
import { businessId15Schema, type BusinessId15 } from "./unions/business-id15.js";
import { customerId11Schema, type CustomerId11 } from "./unions/customer-id11.js";
import { customerIpAddressSchema, type CustomerIpAddress } from "./unions/customer-ip-address.js";
import { discountId11Schema, type DiscountId11 } from "./unions/discount-id11.js";

/** Represents a transaction entity when previewing transactions. */
export type TransactionPreview = {
  /** Paddle ID of the customer that this transaction preview is for, prefixed with `ctm_`. */
  customerId: CustomerId11;
  /**
   * Paddle ID of the address that this transaction preview is for, prefixed with `add_`. Send one
   * of `address_id`, `customer_ip_address`, or the `address` object when previewing.
   */
  addressId: AddressId11;
  /** Paddle ID of the business that this transaction preview is for, prefixed with `biz_`. */
  businessId: BusinessId15;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode: CurrencyCode;
  /** Paddle ID of the discount applied to this transaction preview, prefixed with `dsc_`. */
  discountId: DiscountId11;
  /**
   * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or
   * the `address` object when previewing.
   */
  customerIpAddress: CustomerIpAddress;
  /**
   * Address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the
   * `address` object when previewing.
   */
  address: Address13;
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
  customerId: customerId11Schema,
  addressId: addressId11Schema,
  businessId: businessId15Schema,
  currencyCode: currencyCodeSchema,
  discountId: discountId11Schema,
  customerIpAddress: customerIpAddressSchema,
  address: address13Schema,
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
