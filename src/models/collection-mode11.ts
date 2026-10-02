import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How payment is collected for this transaction. `automatic` for checkout, `manual` for invoices.
 */
export const CollectionMode11 = {
  /**
   * "automatic": { "description": "Payment is collected automatically using a checkout initially,
   * then using a payment method on file." }
   */
  Automatic: "automatic",
  /**
   * "manual": { "description": "Payment is collected manually. Customers are sent an invoice with
   * payment terms and can make a payment offline or using a checkout. Requires `billing_details`."
   * }
   */
  Manual: "manual",
} as const;
export type CollectionMode11 = (typeof CollectionMode11)[keyof typeof CollectionMode11] | (string & {});

export const collectionMode11Schema: EnumSchema<CollectionMode11> =
  s.enumOf<CollectionMode11>(CollectionMode11);
