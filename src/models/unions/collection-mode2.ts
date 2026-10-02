import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { collectionModeSchema, type CollectionMode } from "../collection-mode.js";

/**
 * How payment is collected for transactions created for this subscription. `automatic` for
 * checkout, `manual` for invoices.
 */
export type CollectionMode2 = CollectionMode;

export const collectionMode2Schema: Schema<CollectionMode2> = s.of<CollectionMode2>(
  s.union([s.lazy(() => collectionModeSchema)]),
);
