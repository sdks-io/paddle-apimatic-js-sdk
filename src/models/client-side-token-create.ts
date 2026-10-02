import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description3Schema, type Description3 } from "./unions/description3.js";

/** Represents a client-side token entity. */
export type ClientSideTokenCreate = {
  /** Short name of this client-side token. Typically unique and human-identifiable. */
  name: string;
  description?: Description3;
};

export const clientSideTokenCreateSchema: Schema<ClientSideTokenCreate> = s.object<ClientSideTokenCreate>({
  name: s.string(),
  description: s.optional(s.lazy(() => description3Schema)),
});
