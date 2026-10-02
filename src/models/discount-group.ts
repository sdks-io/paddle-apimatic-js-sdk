import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { importMeta1Schema, type ImportMeta1 } from "./unions/import-meta1.js";

/** Represents a discount group entity. */
export type DiscountGroup = {
  id: string;
  /**
   * Unique name of this discount group, typically something short and memorable for categorization.
   * Not shown to customers.
   */
  name: string;
  /** Whether this entity can be used in Paddle. */
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  /** Import information for this entity. `null` if this entity is not imported. */
  importMeta: ImportMeta1;
};

export const discountGroupSchema: Schema<DiscountGroup> = s.object<DiscountGroup>({
  id: s.string(),
  name: s.string(),
  status: statusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  importMeta: importMeta1Schema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    importMeta: "import_meta",
  },
});
