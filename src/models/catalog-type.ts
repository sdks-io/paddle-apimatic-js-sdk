import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of item. Standard items are considered part of your catalog and are shown in the Paddle
 * dashboard.
 */
export const CatalogType = {
  /**
   * "custom": { "description": "Non-catalog item. Typically created for a specific transaction or
   * subscription. Not returned when listing or shown in the Paddle dashboard." }
   */
  Custom: "custom",
  /**
   * "standard": { "description": "Standard item. Can be considered part of your catalog and reused
   * across transactions and subscriptions easily." }
   */
  Standard: "standard",
} as const;
export type CatalogType = (typeof CatalogType)[keyof typeof CatalogType] | (string & {});

export const catalogTypeSchema: EnumSchema<CatalogType> = s.enumOf<CatalogType>(CatalogType);
