import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ClientTokenStatus, clientTokenStatusSchema } from "./client-token-status.js";

/** Represents a client-side token entity. */
export type UpdateClientToken = {
  /** @default ClientTokenStatus.Active */
  status?: ClientTokenStatus;
};

export const updateClientTokenSchema: Schema<UpdateClientToken> = s.object<UpdateClientToken>({
  status: s.defaulted(clientTokenStatusSchema, ClientTokenStatus.Active),
});
