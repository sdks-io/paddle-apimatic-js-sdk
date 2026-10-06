import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientTokenStatusSchema, type ClientTokenStatus } from "./client-token-status.js";

/** Represents a client-side token entity. */
export type UpdateClientToken = {
  status: ClientTokenStatus;
};

export const updateClientTokenSchema: Schema<UpdateClientToken> = s.object<UpdateClientToken>({
  status: clientTokenStatusSchema,
});
