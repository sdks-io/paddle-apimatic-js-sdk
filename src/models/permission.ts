import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Permission = {
  /**
   * "address_read": { "description": "View customer addresses and include address data in API
   * responses." }
   */
  AddressRead: "address.read",
  /** "address_write": { "description": "Create and update customer addresses." } */
  AddressWrite: "address.write",
  /** "adjustment_read": { "description": "View adjustments and credit notes for transactions." } */
  AdjustmentRead: "adjustment.read",
  /** "adjustment_write": { "description": "Create new adjustments for transactions." } */
  AdjustmentWrite: "adjustment.write",
  /**
   * "business_read": { "description": "View customer businesses and include business data in API
   * responses." }
   */
  BusinessRead: "business.read",
  /** "business_write": { "description": "Create and update customer businesses." } */
  BusinessWrite: "business.write",
  /**
   * "checkout_domain_read": { "description": "View checkout domains, their approval status, and
   * payment method verification status." }
   */
  CheckoutDomainRead: "checkout_domain.read",
  /**
   * "checkout_domain_write": { "description": "Delete checkout domains, and trigger payment method
   * verification (Apple Pay) for approved checkout domains." }
   */
  CheckoutDomainWrite: "checkout_domain.write",
  /** "client_token_read": { "description": "View client-side tokens." } */
  ClientTokenRead: "client_token.read",
  /** "client_token_write": { "description": "Create and update client-side tokens." } */
  ClientTokenWrite: "client_token.write",
  /**
   * "customer_read": { "description": "View customers, including credit balances, and include
   * customer data in API responses." }
   */
  CustomerRead: "customer.read",
  /**
   * "customer_write": { "description": "Create new customers and update existing customer
   * information." }
   */
  CustomerWrite: "customer.write",
  /**
   * "customer_auth_token_write": { "description": "Generate authentication tokens for customers." }
   */
  CustomerAuthTokenWrite: "customer_auth_token.write",
  /**
   * "customer_portal_session_write": { "description": "Create new customer portal sessions for
   * customers to manage their subscriptions, payment methods, and more." }
   */
  CustomerPortalSessionWrite: "customer_portal_session.write",
  /**
   * "discount_read": { "description": "View discounts and include discount data in API responses."
   * }
   */
  DiscountRead: "discount.read",
  /**
   * "discount_write": { "description": "Create new discounts and modify existing discount
   * information." }
   */
  DiscountWrite: "discount.write",
  /**
   * "metrics_read": { "description": "View metrics data including revenue, subscribers, and
   * conversion timeseries." }
   */
  MetricsRead: "metrics.read",
  /**
   * "notification_read": { "description": "View event history, sent notifications, notification
   * delivery logs, and include event data in API responses." }
   */
  NotificationRead: "notification.read",
  /** "notification_write": { "description": "Replay notifications." } */
  NotificationWrite: "notification.write",
  /** "notification_setting_read": { "description": "View settings for notifications." } */
  NotificationSettingRead: "notification_setting.read",
  /**
   * "notification_setting_write": { "description": "Create, update, and delete notification
   * settings." }
   */
  NotificationSettingWrite: "notification_setting.write",
  /**
   * "notification_simulation_read": { "description": "View notification simulations, simulation
   * runs, and events within a simulation run." }
   */
  NotificationSimulationRead: "notification_simulation.read",
  /**
   * "notification_simulation_write": { "description": "Create and modify notification simulations,
   * create a run for a simulation, and replay events within a run for a simulation." }
   */
  NotificationSimulationWrite: "notification_simulation.write",
  /** "payment_method_read": { "description": "View saved payment methods for customers." } */
  PaymentMethodRead: "payment_method.read",
  /** "payment_method_write": { "description": "Delete payment methods for customers." } */
  PaymentMethodWrite: "payment_method.write",
  /** "price_read": { "description": "View prices and include price data in API responses." } */
  PriceRead: "price.read",
  /**
   * "price_write": { "description": "Create new prices and modify existing price information." }
   */
  PriceWrite: "price.write",
  /**
   * "product_read": { "description": "View products and include product data in API responses." }
   */
  ProductRead: "product.read",
  /**
   * "product_write": { "description": "Create new products and modify existing product
   * information." }
   */
  ProductWrite: "product.write",
  /** "report_read": { "description": "View and download report data." } */
  ReportRead: "report.read",
  /** "report_write": { "description": "Create new reports." } */
  ReportWrite: "report.write",
  /**
   * "subscription_read": { "description": "View subscriptions and preview subscription updates and
   * charges." }
   */
  SubscriptionRead: "subscription.read",
  /**
   * "subscription_write": { "description": "Create one-time charges, update subscriptions, and
   * manage subscription status." }
   */
  SubscriptionWrite: "subscription.write",
  /**
   * "transaction_read": { "description": "View transactions, preview transactions and prices,
   * access invoices, and include transaction data in API responses." }
   */
  TransactionRead: "transaction.read",
  /**
   * "transaction_write": { "description": "Create, update, and revise transactions, and update
   * payment methods." }
   */
  TransactionWrite: "transaction.write",
} as const;
export type Permission = (typeof Permission)[keyof typeof Permission] | (string & {});

export const permissionSchema: EnumSchema<Permission> = s.enumOf<Permission>(Permission);
