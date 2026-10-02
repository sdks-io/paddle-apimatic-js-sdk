import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessContactsItem = {
  /** Full name of this contact. */
  name: string;
  /** Email address for this contact. */
  email: string;
};

export const businessContactsItemSchema: Schema<BusinessContactsItem> = s.object<BusinessContactsItem>({
  name: s.string(),
  email: s.string(),
});
