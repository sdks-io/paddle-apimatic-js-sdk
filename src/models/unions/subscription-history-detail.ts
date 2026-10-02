import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { activatedSchema, type Activated } from "../activated.js";
import { addressUpdatedSchema, type AddressUpdated } from "../address-updated.js";
import { billingCycleUpdatedSchema, type BillingCycleUpdated } from "../billing-cycle-updated.js";
import { billingDateUpdatedSchema, type BillingDateUpdated } from "../billing-date-updated.js";
import { billingDetailsUpdatedSchema, type BillingDetailsUpdated } from "../billing-details-updated.js";
import { businessAddedSchema, type BusinessAdded } from "../business-added.js";
import { businessRemovedSchema, type BusinessRemoved } from "../business-removed.js";
import { businessUpdatedSchema, type BusinessUpdated } from "../business-updated.js";
import { canceledSchema, type Canceled } from "../canceled.js";
import { collectionModeUpdatedSchema, type CollectionModeUpdated } from "../collection-mode-updated.js";
import {
  consentRequirementGrantedSchema,
  type ConsentRequirementGranted,
} from "../consent-requirement-granted.js";
import { createdSchema, type Created } from "../created.js";
import { currencyUpdatedSchema, type CurrencyUpdated } from "../currency-updated.js";
import { customDataUpdatedSchema, type CustomDataUpdated } from "../custom-data-updated.js";
import { customerUpdatedSchema, type CustomerUpdated } from "../customer-updated.js";
import { discountAddedSchema, type DiscountAdded } from "../discount-added.js";
import { discountExpiredSchema, type DiscountExpired } from "../discount-expired.js";
import { discountRemovedSchema, type DiscountRemoved } from "../discount-removed.js";
import { itemAddedSchema, type ItemAdded } from "../item-added.js";
import { itemQuantityUpdatedSchema, type ItemQuantityUpdated } from "../item-quantity-updated.js";
import { itemRemovedSchema, type ItemRemoved } from "../item-removed.js";
import { oneOffChargeAppliedSchema, type OneOffChargeApplied } from "../one-off-charge-applied.js";
import { pastDueSchema, type PastDue } from "../past-due.js";
import { pausedSchema, type Paused } from "../paused.js";
import { paymentAttemptedSchema, type PaymentAttempted } from "../payment-attempted.js";
import { paymentMethodAddedSchema, type PaymentMethodAdded } from "../payment-method-added.js";
import { paymentMethodRemovedSchema, type PaymentMethodRemoved } from "../payment-method-removed.js";
import { paymentMethodUpdatedSchema, type PaymentMethodUpdated } from "../payment-method-updated.js";
import { renewedSchema, type Renewed } from "../renewed.js";
import { resumedSchema, type Resumed } from "../resumed.js";
import { scheduledChangeAddedSchema, type ScheduledChangeAdded } from "../scheduled-change-added.js";
import { scheduledChangeRemovedSchema, type ScheduledChangeRemoved } from "../scheduled-change-removed.js";
import { scheduledChangeUpdatedSchema, type ScheduledChangeUpdated } from "../scheduled-change-updated.js";

export type SubscriptionHistoryDetail =
  | (Activated & { action: "subscription_activated" })
  | (AddressUpdated & { action: "subscription_address_updated" })
  | (BillingCycleUpdated & { action: "subscription_billing_cycle_updated" })
  | (BillingDateUpdated & { action: "subscription_billing_date_updated" })
  | (BillingDetailsUpdated & { action: "subscription_billing_details_updated" })
  | (BusinessAdded & { action: "subscription_business_added" })
  | (BusinessRemoved & { action: "subscription_business_removed" })
  | (BusinessUpdated & { action: "subscription_business_updated" })
  | (Canceled & { action: "subscription_canceled" })
  | (CollectionModeUpdated & { action: "subscription_collection_mode_updated" })
  | (ConsentRequirementGranted & { action: "subscription_consent_requirement_granted" })
  | (Created & { action: "subscription_created" })
  | (CurrencyUpdated & { action: "subscription_currency_updated" })
  | (CustomDataUpdated & { action: "subscription_custom_data_updated" })
  | (CustomerUpdated & { action: "subscription_customer_updated" })
  | (DiscountAdded & { action: "subscription_discount_added" })
  | (DiscountExpired & { action: "subscription_discount_expired" })
  | (DiscountRemoved & { action: "subscription_discount_removed" })
  | (ItemAdded & { action: "subscription_item_added" })
  | (ItemQuantityUpdated & { action: "subscription_item_quantity_updated" })
  | (ItemRemoved & { action: "subscription_item_removed" })
  | (OneOffChargeApplied & { action: "subscription_one_off_charge_applied" })
  | (PastDue & { action: "subscription_past_due" })
  | (Paused & { action: "subscription_paused" })
  | (PaymentAttempted & { action: "subscription_payment_attempted" })
  | (PaymentMethodAdded & { action: "subscription_payment_method_added" })
  | (PaymentMethodRemoved & { action: "subscription_payment_method_removed" })
  | (PaymentMethodUpdated & { action: "subscription_payment_method_updated" })
  | (Renewed & { action: "subscription_renewed" })
  | (Resumed & { action: "subscription_resumed" })
  | (ScheduledChangeAdded & { action: "subscription_scheduled_change_added" })
  | (ScheduledChangeRemoved & { action: "subscription_scheduled_change_removed" })
  | (ScheduledChangeUpdated & { action: "subscription_scheduled_change_updated" });

export const subscriptionHistoryDetailSchema: Schema<SubscriptionHistoryDetail> =
  s.discriminatedUnion<SubscriptionHistoryDetail>("action", {
    subscription_activated: activatedSchema,
    subscription_address_updated: addressUpdatedSchema,
    subscription_billing_cycle_updated: billingCycleUpdatedSchema,
    subscription_billing_date_updated: billingDateUpdatedSchema,
    subscription_billing_details_updated: billingDetailsUpdatedSchema,
    subscription_business_added: businessAddedSchema,
    subscription_business_removed: businessRemovedSchema,
    subscription_business_updated: businessUpdatedSchema,
    subscription_canceled: canceledSchema,
    subscription_collection_mode_updated: collectionModeUpdatedSchema,
    subscription_consent_requirement_granted: consentRequirementGrantedSchema,
    subscription_created: createdSchema,
    subscription_currency_updated: currencyUpdatedSchema,
    subscription_custom_data_updated: customDataUpdatedSchema,
    subscription_customer_updated: customerUpdatedSchema,
    subscription_discount_added: discountAddedSchema,
    subscription_discount_expired: discountExpiredSchema,
    subscription_discount_removed: discountRemovedSchema,
    subscription_item_added: itemAddedSchema,
    subscription_item_quantity_updated: itemQuantityUpdatedSchema,
    subscription_item_removed: itemRemovedSchema,
    subscription_one_off_charge_applied: oneOffChargeAppliedSchema,
    subscription_past_due: pastDueSchema,
    subscription_paused: pausedSchema,
    subscription_payment_attempted: paymentAttemptedSchema,
    subscription_payment_method_added: paymentMethodAddedSchema,
    subscription_payment_method_removed: paymentMethodRemovedSchema,
    subscription_payment_method_updated: paymentMethodUpdatedSchema,
    subscription_renewed: renewedSchema,
    subscription_resumed: resumedSchema,
    subscription_scheduled_change_added: scheduledChangeAddedSchema,
    subscription_scheduled_change_removed: scheduledChangeRemovedSchema,
    subscription_scheduled_change_updated: scheduledChangeUpdatedSchema,
  });
