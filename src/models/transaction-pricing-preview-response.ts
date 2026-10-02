import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodType1Schema, type PaymentMethodType1 } from "./payment-method-type1.js";
import { pricePreviewDetailsSchema, type PricePreviewDetails } from "./price-preview-details.js";
import { addressId1Schema, type AddressId1 } from "./unions/address-id1.js";
import { address1Schema, type Address1 } from "./unions/address1.js";
import { businessId1Schema, type BusinessId1 } from "./unions/business-id1.js";
import { currencyCode14Schema, type CurrencyCode14 } from "./unions/currency-code14.js";
import { customerId1Schema, type CustomerId1 } from "./unions/customer-id1.js";
import { customerIpAddressSchema, type CustomerIpAddress } from "./unions/customer-ip-address.js";
import { discountId1Schema, type DiscountId1 } from "./unions/discount-id1.js";

export type TransactionPricingPreviewResponse = {
  /** Paddle ID of the customer that this preview is for, prefixed with `ctm_`. */
  customerId: CustomerId1;
  /**
   * Paddle ID of the address that this preview is for, prefixed with `add_`. Send one of
   * `address_id`, `customer_ip_address`, or the `address` object when previewing.
   */
  addressId: AddressId1;
  /** Paddle ID of the business that this preview is for, prefixed with `biz_`. */
  businessId: BusinessId1;
  /** Supported three-letter ISO 4217 currency code. */
  currencyCode: CurrencyCode14;
  /** Paddle ID of the discount applied to this preview, prefixed with `dsc_`. */
  discountId: DiscountId1;
  /**
   * Address for this preview. Send one of `address_id`, `customer_ip_address`, or the `address`
   * object when previewing.
   */
  address: Address1;
  /**
   * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or
   * the `address` object when previewing.
   */
  customerIpAddress: CustomerIpAddress;
  details: PricePreviewDetails;
  availablePaymentMethods: PaymentMethodType1[];
};

export const transactionPricingPreviewResponseSchema: Schema<TransactionPricingPreviewResponse> =
  s.object<TransactionPricingPreviewResponse>({
    customerId: customerId1Schema,
    addressId: addressId1Schema,
    businessId: businessId1Schema,
    currencyCode: currencyCode14Schema,
    discountId: discountId1Schema,
    address: address1Schema,
    customerIpAddress: customerIpAddressSchema,
    details: pricePreviewDetailsSchema,
    availablePaymentMethods: s.array(s.lazy(() => paymentMethodType1Schema)),
    _keysMap: {
      customerId: "customer_id",
      addressId: "address_id",
      businessId: "business_id",
      currencyCode: "currency_code",
      discountId: "discount_id",
      customerIpAddress: "customer_ip_address",
      availablePaymentMethods: "available_payment_methods",
    },
  });
