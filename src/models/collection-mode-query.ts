import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CollectionModeQuery = {
  /**
   * "automatic": { "description": "Return entities where payment is collected automatically using a
   * checkout or saved payment method." }
   */
  Automatic: "automatic",
  /**
   * "manual": { "description": "Return entities where payment is collected manually. Customers are
   * sent an invoice with payment terms and can make a payment offline or using a checkout." }
   */
  Manual: "manual",
} as const;
export type CollectionModeQuery =
  | (typeof CollectionModeQuery)[keyof typeof CollectionModeQuery]
  | (string & {});

export const collectionModeQuerySchema: EnumSchema<CollectionModeQuery> =
  s.enumOf<CollectionModeQuery>(CollectionModeQuery);
