import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price1Schema, type Price1 } from "./price1.js";
import { product1Schema, type Product1 } from "./product1.js";
import { subscriptionItemStatusSchema, type SubscriptionItemStatus } from "./subscription-item-status.js";
import { nextBilledAtSchema, type NextBilledAt } from "./unions/next-billed-at.js";
import { previouslyBilledAtSchema, type PreviouslyBilledAt } from "./unions/previously-billed-at.js";
import { trialDatesSchema, type TrialDates } from "./unions/trial-dates.js";

/** Represents a subscription item. */
export type SubscriptionItem1 = {
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
  price: Price1;
  /**
   * Related product entity for this item. This reflects the product entity at the time it was added
   * to the subscription.
   */
  product: Product1;
};

export const subscriptionItem1Schema: Schema<SubscriptionItem1> = s.object<SubscriptionItem1>({
  status: subscriptionItemStatusSchema,
  quantity: s.number(),
  recurring: s.boolean(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  previouslyBilledAt: previouslyBilledAtSchema,
  nextBilledAt: nextBilledAtSchema,
  trialDates: trialDatesSchema,
  price: price1Schema,
  product: product1Schema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    previouslyBilledAt: "previously_billed_at",
    nextBilledAt: "next_billed_at",
    trialDates: "trial_dates",
  },
});
