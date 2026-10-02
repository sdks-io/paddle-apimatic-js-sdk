import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event sent by Paddle, in the format `entity.event_type`. */
export const EventTypeName = {
  /**
   * "address.created": { "description": "An
   * [`address.created`](https://developer.paddle.com/webhooks/addresses/address-created) event." }
   */
  AddressCreated: "address.created",
  /**
   * "address.imported": { "description": "An
   * [`address.imported`](https://developer.paddle.com/webhooks/addresses/address-imported) event."
   * }
   */
  AddressImported: "address.imported",
  /**
   * "address.updated": { "description": "An
   * [`address.updated`](https://developer.paddle.com/webhooks/addresses/address-updated) event." }
   */
  AddressUpdated: "address.updated",
  /**
   * "adjustment.created": { "description": "An
   * [`adjustment.created`](https://developer.paddle.com/webhooks/adjustments/adjustment-created)
   * event." }
   */
  AdjustmentCreated: "adjustment.created",
  /**
   * "adjustment.updated": { "description": "An
   * [`adjustment.updated`](https://developer.paddle.com/webhooks/adjustments/adjustment-updated)
   * event." }
   */
  AdjustmentUpdated: "adjustment.updated",
  /**
   * "api_key.created": { "description": "An
   * [`api_key.created`](https://developer.paddle.com/webhooks/api-keys/api-key-created) event." }
   */
  ApiKeyCreated: "api_key.created",
  /**
   * "api_key.expired": { "description": "An
   * [`api_key.expired`](https://developer.paddle.com/webhooks/api-keys/api-key-expired) event." }
   */
  ApiKeyExpired: "api_key.expired",
  /**
   * "api_key.expiring": { "description": "An
   * [`api_key.expiring`](https://developer.paddle.com/webhooks/api-keys/api-key-expiring) event." }
   */
  ApiKeyExpiring: "api_key.expiring",
  /**
   * "api_key.revoked": { "description": "An
   * [`api_key.revoked`](https://developer.paddle.com/webhooks/api-keys/api-key-revoked) event." }
   */
  ApiKeyRevoked: "api_key.revoked",
  /**
   * "api_key.updated": { "description": "An
   * [`api_key.updated`](https://developer.paddle.com/webhooks/api-keys/api-key-updated) event." }
   */
  ApiKeyUpdated: "api_key.updated",
  /**
   * "api_key_exposure.created": { "description": "An
   * [`api_key_exposure.created`](https://developer.paddle.com/webhooks/api-key-exposures/api-key-exposure-created)
   * event." }
   */
  ApiKeyExposureCreated: "api_key_exposure.created",
  /**
   * "business.created": { "description": "A
   * [`business.created`](https://developer.paddle.com/webhooks/businesses/business-created) event."
   * }
   */
  BusinessCreated: "business.created",
  /**
   * "business.imported": { "description": "A
   * [`business.imported`](https://developer.paddle.com/webhooks/businesses/business-imported)
   * event." }
   */
  BusinessImported: "business.imported",
  /**
   * "business.updated": { "description": "A
   * [`business.updated`](https://developer.paddle.com/webhooks/businesses/business-updated) event."
   * }
   */
  BusinessUpdated: "business.updated",
  /**
   * "client_token.created": { "description": "A
   * [`client_token.created`](https://developer.paddle.com/webhooks/client-tokens/client-token-created)
   * event." }
   */
  ClientTokenCreated: "client_token.created",
  /**
   * "client_token.revoked": { "description": "A
   * [`client_token.revoked`](https://developer.paddle.com/webhooks/client-tokens/client-token-revoked)
   * event." }
   */
  ClientTokenRevoked: "client_token.revoked",
  /**
   * "client_token.updated": { "description": "A
   * [`client_token.updated`](https://developer.paddle.com/webhooks/client-tokens/client-token-updated)
   * event." }
   */
  ClientTokenUpdated: "client_token.updated",
  /**
   * "customer.created": { "description": "A
   * [`customer.created`](https://developer.paddle.com/webhooks/customers/customer-created) event."
   * }
   */
  CustomerCreated: "customer.created",
  /**
   * "customer.imported": { "description": "A
   * [`customer.imported`](https://developer.paddle.com/webhooks/customers/customer-imported)
   * event." }
   */
  CustomerImported: "customer.imported",
  /**
   * "customer.updated": { "description": "A
   * [`customer.updated`](https://developer.paddle.com/webhooks/customers/customer-updated) event."
   * }
   */
  CustomerUpdated: "customer.updated",
  /**
   * "discount.created": { "description": "A
   * [`discount.created`](https://developer.paddle.com/webhooks/discounts/discount-created) event."
   * }
   */
  DiscountCreated: "discount.created",
  /**
   * "discount.imported": { "description": "A
   * [`discount.imported`](https://developer.paddle.com/webhooks/discounts/discount-imported)
   * event." }
   */
  DiscountImported: "discount.imported",
  /**
   * "discount.updated": { "description": "A
   * [`discount.updated`](https://developer.paddle.com/webhooks/discounts/discount-updated) event."
   * }
   */
  DiscountUpdated: "discount.updated",
  /**
   * "discount_group.created": { "description": "A
   * [`discount_group.created`](https://developer.paddle.com/webhooks/discount-groups/discount-group-created)
   * event." }
   */
  DiscountGroupCreated: "discount_group.created",
  /**
   * "discount_group.updated": { "description": "A
   * [`discount_group.updated`](https://developer.paddle.com/webhooks/discount-groups/discount-group-updated)
   * event." }
   */
  DiscountGroupUpdated: "discount_group.updated",
  /**
   * "payment_method.saved": { "description": "A
   * [`payment_method.saved`](https://developer.paddle.com/webhooks/payment-methods/payment-method-saved)
   * event." }
   */
  PaymentMethodSaved: "payment_method.saved",
  /**
   * "payment_method.deleted": { "description": "A
   * [`payment_method.deleted`](https://developer.paddle.com/webhooks/payment-methods/payment-method-deleted)
   * event." }
   */
  PaymentMethodDeleted: "payment_method.deleted",
  /**
   * "payout.created": { "description": "A
   * [`payout.created`](https://developer.paddle.com/webhooks/payouts/payout-created) event." }
   */
  PayoutCreated: "payout.created",
  /**
   * "payout.paid": { "description": "A
   * [`payout.paid`](https://developer.paddle.com/webhooks/payouts/payout-paid) event." }
   */
  PayoutPaid: "payout.paid",
  /**
   * "price.created": { "description": "A
   * [`price.created`](https://developer.paddle.com/webhooks/prices/price-created) event." }
   */
  PriceCreated: "price.created",
  /**
   * "price.imported": { "description": "A
   * [`price.imported`](https://developer.paddle.com/webhooks/prices/price-imported) event." }
   */
  PriceImported: "price.imported",
  /**
   * "price.updated": { "description": "A
   * [`price.updated`](https://developer.paddle.com/webhooks/prices/price-updated) event." }
   */
  PriceUpdated: "price.updated",
  /**
   * "product.created": { "description": "A
   * [`product.created`](https://developer.paddle.com/webhooks/products/product-created) event." }
   */
  ProductCreated: "product.created",
  /**
   * "product.imported": { "description": "A
   * [`product.imported`](https://developer.paddle.com/webhooks/products/product-imported) event." }
   */
  ProductImported: "product.imported",
  /**
   * "product.updated": { "description": "A
   * [`product.updated`](https://developer.paddle.com/webhooks/products/product-updated) event." }
   */
  ProductUpdated: "product.updated",
  /**
   * "report.created": { "description": "A
   * [`report.created`](https://developer.paddle.com/webhooks/reports/report-created) event." }
   */
  ReportCreated: "report.created",
  /**
   * "report.updated": { "description": "A
   * [`report.updated`](https://developer.paddle.com/webhooks/reports/report-updated) event." }
   */
  ReportUpdated: "report.updated",
  /**
   * "subscription.activated": { "description": "A
   * [`subscription.activated`](https://developer.paddle.com/webhooks/subscriptions/subscription-activated)
   * event." }
   */
  SubscriptionActivated: "subscription.activated",
  /**
   * "subscription.canceled": { "description": "A
   * [`subscription.canceled`](https://developer.paddle.com/webhooks/subscriptions/subscription-canceled)
   * event." }
   */
  SubscriptionCanceled: "subscription.canceled",
  /**
   * "subscription.created": { "description": "A
   * [`subscription.created`](https://developer.paddle.com/webhooks/subscriptions/subscription-created)
   * event." }
   */
  SubscriptionCreated: "subscription.created",
  /**
   * "subscription.imported": { "description": "A
   * [`subscription.imported`](https://developer.paddle.com/webhooks/subscriptions/subscription-imported)
   * event." }
   */
  SubscriptionImported: "subscription.imported",
  /**
   * "subscription.past_due": { "description": "A
   * [`subscription.past_due`](https://developer.paddle.com/webhooks/subscriptions/subscription-past-due)
   * event." }
   */
  SubscriptionPastDue: "subscription.past_due",
  /**
   * "subscription.paused": { "description": "A
   * [`subscription.paused`](https://developer.paddle.com/webhooks/subscriptions/subscription-paused)
   * event." }
   */
  SubscriptionPaused: "subscription.paused",
  /**
   * "subscription.resumed": { "description": "A
   * [`subscription.resumed`](https://developer.paddle.com/webhooks/subscriptions/subscription-resumed)
   * event." }
   */
  SubscriptionResumed: "subscription.resumed",
  /**
   * "subscription.trialing": { "description": "A
   * [`subscription.trialing`](https://developer.paddle.com/webhooks/subscriptions/subscription-trialing)
   * event." }
   */
  SubscriptionTrialing: "subscription.trialing",
  /**
   * "subscription.updated": { "description": "A
   * [`subscription.updated`](https://developer.paddle.com/webhooks/subscriptions/subscription-updated)
   * event." }
   */
  SubscriptionUpdated: "subscription.updated",
  /**
   * "transaction.billed": { "description": "A
   * [`transaction.billed`](https://developer.paddle.com/webhooks/transactions/transaction-billed)
   * event." }
   */
  TransactionBilled: "transaction.billed",
  /**
   * "transaction.canceled": { "description": "A
   * [`transaction.canceled`](https://developer.paddle.com/webhooks/transactions/transaction-canceled)
   * event." }
   */
  TransactionCanceled: "transaction.canceled",
  /**
   * "transaction.completed": { "description": "A
   * [`transaction.completed`](https://developer.paddle.com/webhooks/transactions/transaction-completed)
   * event." }
   */
  TransactionCompleted: "transaction.completed",
  /**
   * "transaction.created": { "description": "A
   * [`transaction.created`](https://developer.paddle.com/webhooks/transactions/transaction-created)
   * event." }
   */
  TransactionCreated: "transaction.created",
  /**
   * "transaction.paid": { "description": "A
   * [`transaction.paid`](https://developer.paddle.com/webhooks/transactions/transaction-paid)
   * event." }
   */
  TransactionPaid: "transaction.paid",
  /**
   * "transaction.past_due": { "description": "A
   * [`transaction.past_due`](https://developer.paddle.com/webhooks/transactions/transaction-past-due)
   * event." }
   */
  TransactionPastDue: "transaction.past_due",
  /**
   * "transaction.payment_failed": { "description": "A
   * [`transaction.payment_failed`](https://developer.paddle.com/webhooks/transactions/transaction-payment-failed)
   * event." }
   */
  TransactionPaymentFailed: "transaction.payment_failed",
  /**
   * "transaction.ready": { "description": "A
   * [`transaction.ready`](https://developer.paddle.com/webhooks/transactions/transaction-ready)
   * event." }
   */
  TransactionReady: "transaction.ready",
  /**
   * "transaction.revised": { "description": "A
   * [`transaction.revised`](https://developer.paddle.com/webhooks/transactions/transaction-revised)
   * event." }
   */
  TransactionRevised: "transaction.revised",
  /**
   * "transaction.updated": { "description": "A
   * [`transaction.updated`](https://developer.paddle.com/webhooks/transactions/transaction-updated)
   * event." }
   */
  TransactionUpdated: "transaction.updated",
} as const;
export type EventTypeName = (typeof EventTypeName)[keyof typeof EventTypeName] | (string & {});

export const eventTypeNameSchema: EnumSchema<EventTypeName> = s.enumOf<EventTypeName>(EventTypeName);
