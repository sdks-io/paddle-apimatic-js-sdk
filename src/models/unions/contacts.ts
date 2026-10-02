import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contactsCreateSchema, type ContactsCreate } from "../contacts-create.js";

/** List of contacts related to this business, typically used for sending invoices. */
export type Contacts = ContactsCreate[];

export const contactsSchema: Schema<Contacts> = s.of<Contacts>(
  s.union([s.array(s.lazy(() => contactsCreateSchema))]),
);
