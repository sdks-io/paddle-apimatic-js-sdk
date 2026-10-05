import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Summary of a quantitative change to an item on a subscription, including the direction and
 * magnitude of the change.
 */
export type ItemUpdateSummary = {
  /**
   * Signed change in quantity. Positive when the quantity increased (or an item was added),
   * negative when the quantity decreased (or an item was removed).
   */
  quantityDelta: number;
};

export const itemUpdateSummarySchema: Schema<ItemUpdateSummary> = s.object<ItemUpdateSummary>({
  quantityDelta: s.int(),
  _keysMap: {
    quantityDelta: "quantity_delta",
  },
});
