import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContactsCreate = {
  /** Full name of this contact. */
  name?: string;
  /** Email address for this contact. */
  email: string;
};

export const contactsCreateSchema: Schema<ContactsCreate> = s.object<ContactsCreate>({
  name: s.optional(s.string()),
  email: s.string(),
});
