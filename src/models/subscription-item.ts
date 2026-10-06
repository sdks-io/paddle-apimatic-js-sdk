import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./price.js";
import { productSchema, type Product } from "./product.js";
import { subscriptionItemStatusSchema, type SubscriptionItemStatus } from "./subscription-item-status.js";
import { timePeriodSchema, type TimePeriod } from "./time-period.js";

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
  previouslyBilledAt?: Date | null;
  /** RFC 3339 datetime string of when this item is next scheduled to be billed. */
  nextBilledAt?: Date | null;
  /** Trial dates for this item. */
  trialDates?: TimePeriod | null;
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
  quantity: s.float64(),
  recurring: s.boolean(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  previouslyBilledAt: s.optionalNullable(s.dateTime()),
  nextBilledAt: s.optionalNullable(s.dateTime()),
  trialDates: s.optionalNullable(s.lazy(() => timePeriodSchema)),
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
