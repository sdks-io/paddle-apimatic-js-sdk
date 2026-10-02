import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a discount group entity when creating discount groups. */
export type DiscountGroupCreate = {
  /**
   * Name of this discount group, typically something short and memorable for categorization. Not
   * shown to customers.
   */
  name: string;
};

export const discountGroupCreateSchema: Schema<DiscountGroupCreate> = s.object<DiscountGroupCreate>({
  name: s.string(),
});
