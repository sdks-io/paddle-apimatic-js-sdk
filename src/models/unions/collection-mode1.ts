import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { collectionModeSchema, type CollectionMode } from "../collection-mode.js";

/** The collection mode of the subscription when it was created. */
export type CollectionMode1 = CollectionMode;

export const collectionMode1Schema: Schema<CollectionMode1> = s.of<CollectionMode1>(
  s.union([s.lazy(() => collectionModeSchema)]),
);
