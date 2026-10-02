import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";
import { productSchema, type Product } from "./product.js";
import { subscriptionItemStatusSchema, type SubscriptionItemStatus } from "./subscription-item-status.js";
import { nextBilledAtSchema, type NextBilledAt } from "./unions/next-billed-at.js";
import { previouslyBilledAtSchema, type PreviouslyBilledAt } from "./unions/previously-billed-at.js";
import { trialDatesSchema, type TrialDates } from "./unions/trial-dates.js";

/** Represents a subscription item. */
export type SubscriptionItem = {
  /** Status of this subscription item. Set automatically by Paddle. */
  status: SubscriptionItemStatus;
  /** Quantity of this item on the subscription. */
  quantity: number;
  /** Whether this is a recurring item. `false` if one-time. */
  recurring: boolean;
  /** RFC 3339 datetime string of when this item was added to this subscription. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this item was last updated on this subscription. */
  updatedAt: Date;
  /** RFC 3339 datetime string of when this item was last billed. */
  previouslyBilledAt: PreviouslyBilledAt;
  /** RFC 3339 datetime string of when this item is next scheduled to be billed. */
  nextBilledAt: NextBilledAt;
  /** Trial dates for this item. */
  trialDates: TrialDates;
  /**
   * Related price entity for this item. This reflects the price entity at the time it was added to
   * the subscription.
   */
  price: Price;
  /**
   * Related product entity for this item. This reflects the product entity at the time it was added
   * to the subscription.
   */
  product: Product;
};

export const subscriptionItemSchema: Schema<SubscriptionItem> = s.object<SubscriptionItem>({
  status: subscriptionItemStatusSchema,
  quantity: s.number(),
  recurring: s.boolean(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  previouslyBilledAt: previouslyBilledAtSchema,
  nextBilledAt: nextBilledAtSchema,
  trialDates: trialDatesSchema,
  price: priceSchema,
  product: productSchema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    previouslyBilledAt: "previously_billed_at",
    nextBilledAt: "next_billed_at",
    trialDates: "trial_dates",
  },
});
