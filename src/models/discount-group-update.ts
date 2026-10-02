import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Represents a discount group entity when updating discount groups. */
export type DiscountGroupUpdate = {
  /** Whether this entity can be used in Paddle. */
  status?: Status;
  /**
   * Name of this discount group, typically something short and memorable for categorization. Not
   * shown to customers.
   */
  name?: string;
};

export const discountGroupUpdateSchema: Schema<DiscountGroupUpdate> = s.object<DiscountGroupUpdate>({
  status: s.optional(s.lazy(() => statusSchema)),
  name: s.optional(s.string()),
});
