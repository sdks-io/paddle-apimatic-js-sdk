import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionModeSchema, type CollectionMode } from "./collection-mode.js";

/** Details specific to `subscription_collection_mode_updated` actions. */
export type CollectionModeUpdated = {
  /** What happened on the subscription. @default "subscription_collection_mode_updated" */
  action?: "subscription_collection_mode_updated";
  /**
   * How payment is collected for this subscription. This is what the collection mode was changed
   * to.
   */
  collectionMode: CollectionMode;
};

export const collectionModeUpdatedSchema: Schema<CollectionModeUpdated> = s.object<CollectionModeUpdated>({
  action: s.defaulted(
    s.literal("subscription_collection_mode_updated"),
    "subscription_collection_mode_updated",
  ),
  collectionMode: collectionModeSchema,
  _keysMap: {
    collectionMode: "collection_mode",
  },
});
