import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Addresses } from "./resources/addresses.js";
import { Adjustments } from "./resources/adjustments.js";
import { Businesses } from "./resources/businesses.js";
import { CheckoutDomains } from "./resources/checkout-domains.js";
import { ClientTokens } from "./resources/client-tokens.js";
import { CustomerPortals } from "./resources/customer-portals.js";
import { Customers } from "./resources/customers.js";
import { DiscountGroups } from "./resources/discount-groups.js";
import { Discounts } from "./resources/discounts.js";
import { EventTypes } from "./resources/event-types.js";
import { Events } from "./resources/events.js";
import { IpAddresses } from "./resources/ip-addresses.js";
import { Metrics } from "./resources/metrics.js";
import { NotificationLogs } from "./resources/notification-logs.js";
import { NotificationSettings } from "./resources/notification-settings.js";
import { Notifications } from "./resources/notifications.js";
import { PaymentMethods } from "./resources/payment-methods.js";
import { Prices } from "./resources/prices.js";
import { PricingPreview } from "./resources/pricing-preview.js";
import { Products } from "./resources/products.js";
import { Reports } from "./resources/reports.js";
import { SimulationRunEvents } from "./resources/simulation-run-events.js";
import { SimulationRuns } from "./resources/simulation-runs.js";
import { SimulationTypes } from "./resources/simulation-types.js";
import { Simulations } from "./resources/simulations.js";
import { SubscriptionHistoryApi } from "./resources/subscription-history-api.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Transactions } from "./resources/transactions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Paddle Billing is a complete subscription and recurring revenue management platform, designed for
 * modern SaaS businesses. It helps you increase your revenue, retain customers, and scale your
 * operations.
 *
 * The Paddle API lets you create, read, and update information in your Paddle Billing system. You
 * can use it to integrate Paddle with your app or third-party solutions.
 *
 * See https://developer.paddle.com/ to learn more.
 */
export class PaddleApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #checkoutDomains?: CheckoutDomains;
  #subscriptionHistoryApi?: SubscriptionHistoryApi;
  #transactions?: Transactions;
  #subscriptions?: Subscriptions;
  #simulations?: Simulations;
  #simulationTypes?: SimulationTypes;
  #simulationRuns?: SimulationRuns;
  #simulationRunEvents?: SimulationRunEvents;
  #reports?: Reports;
  #products?: Products;
  #pricingPreview?: PricingPreview;
  #prices?: Prices;
  #paymentMethods?: PaymentMethods;
  #notifications?: Notifications;
  #notificationSettings?: NotificationSettings;
  #notificationLogs?: NotificationLogs;
  #metrics?: Metrics;
  #ipAddresses?: IpAddresses;
  #events?: Events;
  #eventTypes?: EventTypes;
  #discounts?: Discounts;
  #discountGroups?: DiscountGroups;
  #customerPortals?: CustomerPortals;
  #customers?: Customers;
  #clientTokens?: ClientTokens;
  #businesses?: Businesses;
  #adjustments?: Adjustments;
  #addresses?: Addresses;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options),
      defaultHeaders: [
        { name: "User-Agent", value: "PaddleApiClient/0.0.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.0.3", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get checkoutDomains(): CheckoutDomains {
    return (this.#checkoutDomains ??= new CheckoutDomains(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptionHistoryApi(): SubscriptionHistoryApi {
    return (this.#subscriptionHistoryApi ??= new SubscriptionHistoryApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Transaction entities calculate and capture revenue. They hold information about an amount that
   * you're billing for.
   */
  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Subscription entities describe a recurring billing relationship with a customer. They're
   * closely related to transactions.
   */
  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Simulation entities describe a reusable configuration for testing webhooks.
   */
  get simulations(): Simulations {
    return (this.#simulations ??= new Simulations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Simulation type entities are the kinds of simulation you can use when testing webhooks.
   */
  get simulationTypes(): SimulationTypes {
    return (this.#simulationTypes ??= new SimulationTypes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Simulation run entities describe an attempt by Paddle to send simulated events for a
   * notification simulation.
   */
  get simulationRuns(): SimulationRuns {
    return (this.#simulationRuns ??= new SimulationRuns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Simulation run event entities describe a simulated event that happened as part of a
   * notification simulation run.
   */
  get simulationRunEvents(): SimulationRunEvents {
    return (this.#simulationRunEvents ??= new SimulationRunEvents(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Report entities describe a report generated in your Paddle system.
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Product entities describe the items that customers can purchase. They hold high-level product
   * attributes.
   */
  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Pricing previews are calculated totals for prices.
   */
  get pricingPreview(): PricingPreview {
    return (this.#pricingPreview ??= new PricingPreview(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Price entities describe how much and how often you charge for your products. They hold charging
   * information.
   */
  get prices(): Prices {
    return (this.#prices ??= new Prices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payment method entities hold information about a payment method a customer saved at checkout
   * for use in the future. They're related to customer entities.
   */
  get paymentMethods(): PaymentMethods {
    return (this.#paymentMethods ??= new PaymentMethods(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Notification entities describe a notification for an event that happened in your Paddle system.
   */
  get notifications(): Notifications {
    return (this.#notifications ??= new Notifications(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Notification settings entities describe subscriptions to events. They're also called
   * notification destinations.
   */
  get notificationSettings(): NotificationSettings {
    return (this.#notificationSettings ??= new NotificationSettings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Notification logs are records of an attempt to deliver a notification.
   */
  get notificationLogs(): NotificationLogs {
    return (this.#notificationLogs ??= new NotificationLogs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Metrics entities contain timeseries data about your Paddle account, including revenue,
   * subscribers, and conversions.
   */
  get metrics(): Metrics {
    return (this.#metrics ??= new Metrics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Get Paddle IP addresses.
   */
  get ipAddresses(): IpAddresses {
    return (this.#ipAddresses ??= new IpAddresses(this.#rawClient, this.#servers));
  }

  /**
   * Event entities describe something notable that happened in your Paddle system.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Event types are actions that Paddle creates events for.
   */
  get eventTypes(): EventTypes {
    return (this.#eventTypes ??= new EventTypes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Discount entities describe percentage or amount-based discounts for transactions. They're
   * sometimes called coupons or promo codes.
   */
  get discounts(): Discounts {
    return (this.#discounts ??= new Discounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Discount group entities let you organize your discounts by grouping them together.
   */
  get discountGroups(): DiscountGroups {
    return (this.#discountGroups ??= new DiscountGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The customer portal lets customers manage their subscriptions, payment methods, and account
   * information. Customer portal sessions hold authenticated links to the portal for a customer.
   */
  get customerPortals(): CustomerPortals {
    return (this.#customerPortals ??= new CustomerPortals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Customer entities hold information about the people and businesses that make purchases. They're
   * related to addresses and businesses.
   */
  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Client token entities hold the details to authenticate Paddle.js in your frontend code.
   */
  get clientTokens(): ClientTokens {
    return (this.#clientTokens ??= new ClientTokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Business entities hold information about customer businesses. They're sub-entities of
   * customers.
   */
  get businesses(): Businesses {
    return (this.#businesses ??= new Businesses(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Adjustment entities describe post-billing adjustments to billed or completed transactions.
   */
  get adjustments(): Adjustments {
    return (this.#adjustments ??= new Adjustments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Address entities hold billing address information for a customer. They're sub-entities of
   * customers.
   */
  get addresses(): Addresses {
    return (this.#addresses ??= new Addresses(this.#rawClient, this.#servers, this.#auth));
  }
}
