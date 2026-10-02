import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Used to filter subscription history entries by action type. */
export const SubscriptionHistoryActionQuery = {
  /**
   * "subscription_activated": { "description": "Return history entries where the action is
   * `subscription_activated`. The subscription's status became `active`." }
   */
  SubscriptionActivated: "subscription_activated",
  /**
   * "subscription_address_updated": { "description": "Return history entries where the action is
   * `subscription_address_updated`. The address on the subscription was changed." }
   */
  SubscriptionAddressUpdated: "subscription_address_updated",
  /**
   * "subscription_billing_cycle_updated": { "description": "Return history entries where the action
   * is `subscription_billing_cycle_updated`. The billing cycle that sets how often the subscription
   * renews was changed." }
   */
  SubscriptionBillingCycleUpdated: "subscription_billing_cycle_updated",
  /**
   * "subscription_billing_date_updated": { "description": "Return history entries where the action
   * is `subscription_billing_date_updated`. The date the subscription next renews was changed." }
   */
  SubscriptionBillingDateUpdated: "subscription_billing_date_updated",
  /**
   * "subscription_billing_details_updated": { "description": "Return history entries where the
   * action is `subscription_billing_details_updated`. The billing details for the subscription's
   * invoices were changed." }
   */
  SubscriptionBillingDetailsUpdated: "subscription_billing_details_updated",
  /**
   * "subscription_business_added": { "description": "Return history entries where the action is
   * `subscription_business_added`. A business was added to the subscription." }
   */
  SubscriptionBusinessAdded: "subscription_business_added",
  /**
   * "subscription_business_removed": { "description": "Return history entries where the action is
   * `subscription_business_removed`. The business was removed from the subscription." }
   */
  SubscriptionBusinessRemoved: "subscription_business_removed",
  /**
   * "subscription_business_updated": { "description": "Return history entries where the action is
   * `subscription_business_updated`. The business on the subscription was changed." }
   */
  SubscriptionBusinessUpdated: "subscription_business_updated",
  /**
   * "subscription_canceled": { "description": "Return history entries where the action is
   * `subscription_canceled`. The subscription's status became `canceled`." }
   */
  SubscriptionCanceled: "subscription_canceled",
  /**
   * "subscription_collection_mode_updated": { "description": "Return history entries where the
   * action is `subscription_collection_mode_updated`. How the subscription is collected,
   * automatically or manually, was changed." }
   */
  SubscriptionCollectionModeUpdated: "subscription_collection_mode_updated",
  /**
   * "subscription_consent_requirement_granted": { "description": "Return history entries where the
   * action is `subscription_consent_requirement_granted`. A consent requirement on the subscription
   * was granted." }
   */
  SubscriptionConsentRequirementGranted: "subscription_consent_requirement_granted",
  /**
   * "subscription_created": { "description": "Return history entries where the action is
   * `subscription_created`. The subscription was created." }
   */
  SubscriptionCreated: "subscription_created",
  /**
   * "subscription_currency_updated": { "description": "Return history entries where the action is
   * `subscription_currency_updated`. The currency the subscription is billed in was changed." }
   */
  SubscriptionCurrencyUpdated: "subscription_currency_updated",
  /**
   * "subscription_custom_data_updated": { "description": "Return history entries where the action
   * is `subscription_custom_data_updated`. The custom data on the subscription was changed." }
   */
  SubscriptionCustomDataUpdated: "subscription_custom_data_updated",
  /**
   * "subscription_customer_updated": { "description": "Return history entries where the action is
   * `subscription_customer_updated`. The customer the subscription belongs to was changed." }
   */
  SubscriptionCustomerUpdated: "subscription_customer_updated",
  /**
   * "subscription_discount_added": { "description": "Return history entries where the action is
   * `subscription_discount_added`. A discount was added to the subscription." }
   */
  SubscriptionDiscountAdded: "subscription_discount_added",
  /**
   * "subscription_discount_expired": { "description": "Return history entries where the action is
   * `subscription_discount_expired`. A discount on the subscription reached its end date and
   * expired." }
   */
  SubscriptionDiscountExpired: "subscription_discount_expired",
  /**
   * "subscription_discount_removed": { "description": "Return history entries where the action is
   * `subscription_discount_removed`. A discount was removed from the subscription." }
   */
  SubscriptionDiscountRemoved: "subscription_discount_removed",
  /**
   * "subscription_item_added": { "description": "Return history entries where the action is
   * `subscription_item_added`. An item was added to the subscription." }
   */
  SubscriptionItemAdded: "subscription_item_added",
  /**
   * "subscription_item_quantity_updated": { "description": "Return history entries where the action
   * is `subscription_item_quantity_updated`. The quantity of an item on the subscription was
   * changed." }
   */
  SubscriptionItemQuantityUpdated: "subscription_item_quantity_updated",
  /**
   * "subscription_item_removed": { "description": "Return history entries where the action is
   * `subscription_item_removed`. An item was removed from the subscription." }
   */
  SubscriptionItemRemoved: "subscription_item_removed",
  /**
   * "subscription_one_off_charge_applied": { "description": "Return history entries where the
   * action is `subscription_one_off_charge_applied`. A one-time charge was applied to the
   * subscription." }
   */
  SubscriptionOneOffChargeApplied: "subscription_one_off_charge_applied",
  /**
   * "subscription_past_due": { "description": "Return history entries where the action is
   * `subscription_past_due`. The subscription's status became `past_due` after a payment failed." }
   */
  SubscriptionPastDue: "subscription_past_due",
  /**
   * "subscription_paused": { "description": "Return history entries where the action is
   * `subscription_paused`. The subscription's status became `paused`." }
   */
  SubscriptionPaused: "subscription_paused",
  /**
   * "subscription_payment_attempted": { "description": "Return history entries where the action is
   * `subscription_payment_attempted`. A payment for a change to the subscription was attempted and
   * failed." }
   */
  SubscriptionPaymentAttempted: "subscription_payment_attempted",
  /**
   * "subscription_payment_method_added": { "description": "Return history entries where the action
   * is `subscription_payment_method_added`. A payment method was added to the subscription." }
   */
  SubscriptionPaymentMethodAdded: "subscription_payment_method_added",
  /**
   * "subscription_payment_method_removed": { "description": "Return history entries where the
   * action is `subscription_payment_method_removed`. A payment method was removed from the
   * subscription." }
   */
  SubscriptionPaymentMethodRemoved: "subscription_payment_method_removed",
  /**
   * "subscription_payment_method_updated": { "description": "Return history entries where the
   * action is `subscription_payment_method_updated`. The payment method on the subscription was
   * changed." }
   */
  SubscriptionPaymentMethodUpdated: "subscription_payment_method_updated",
  /**
   * "subscription_renewed": { "description": "Return history entries where the action is
   * `subscription_renewed`. The subscription renewed for a new billing period." }
   */
  SubscriptionRenewed: "subscription_renewed",
  /**
   * "subscription_resumed": { "description": "Return history entries where the action is
   * `subscription_resumed`. The subscription's status became `active` after being paused." }
   */
  SubscriptionResumed: "subscription_resumed",
  /**
   * "subscription_scheduled_change_added": { "description": "Return history entries where the
   * action is `subscription_scheduled_change_added`. A scheduled change was added to the
   * subscription." }
   */
  SubscriptionScheduledChangeAdded: "subscription_scheduled_change_added",
  /**
   * "subscription_scheduled_change_removed": { "description": "Return history entries where the
   * action is `subscription_scheduled_change_removed`. A scheduled change was removed from the
   * subscription." }
   */
  SubscriptionScheduledChangeRemoved: "subscription_scheduled_change_removed",
  /**
   * "subscription_scheduled_change_updated": { "description": "Return history entries where the
   * action is `subscription_scheduled_change_updated`. A scheduled change on the subscription was
   * changed." }
   */
  SubscriptionScheduledChangeUpdated: "subscription_scheduled_change_updated",
} as const;
export type SubscriptionHistoryActionQuery =
  | (typeof SubscriptionHistoryActionQuery)[keyof typeof SubscriptionHistoryActionQuery]
  | (string & {});

export const subscriptionHistoryActionQuerySchema: EnumSchema<SubscriptionHistoryActionQuery> =
  s.enumOf<SubscriptionHistoryActionQuery>(SubscriptionHistoryActionQuery);
