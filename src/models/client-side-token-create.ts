import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a client-side token entity. */
export type ClientSideTokenCreate = {
  /** Short name of this client-side token. Typically unique and human-identifiable. */
  name: string;
  description?: string | null;
};

export const clientSideTokenCreateSchema: Schema<ClientSideTokenCreate> = s.object<ClientSideTokenCreate>({
  name: s.string(),
  description: s.optionalNullable(s.string()),
});
