import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalIdSchema, type ExternalId } from "./unions/external-id.js";

/** Import information for the subscription entity. `null` if this entity is not imported. */
export type ImportMetaSubscription = {
  externalId?: ExternalId;
  /** Name of the platform or provider where this entity was imported from. */
  importedFrom: string;
};

export const importMetaSubscriptionSchema: Schema<ImportMetaSubscription> = s.object<ImportMetaSubscription>({
  externalId: s.optional(s.lazy(() => externalIdSchema)),
  importedFrom: s.string(),
  _keysMap: {
    externalId: "external_id",
    importedFrom: "imported_from",
  },
});
