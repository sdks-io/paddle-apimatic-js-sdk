import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ClientTokenStatus, clientTokenStatusSchema } from "./client-token-status.js";
import { description3Schema, type Description3 } from "./unions/description3.js";
import { revokedAtSchema, type RevokedAt } from "./unions/revoked-at.js";

/** Represents a client-side token entity. */
export type ClientSideToken = {
  /**
   * Unique Paddle ID for this client-side token entity, prefixed with `ctkn_`. Not used for
   * Paddle.js authentication; use `token` for authentication.
   */
  id: string;
  token: string;
  /** Short name of this client-side token. Typically unique and human-identifiable. */
  name: string;
  description: Description3;
  /** @default ClientTokenStatus.Active */
  status?: ClientTokenStatus;
  /** RFC 3339 datetime string of when this client-side token was revoked. `null` if not revoked. */
  revokedAt: RevokedAt;
  createdAt: Date;
  updatedAt: Date;
};

export const clientSideTokenSchema: Schema<ClientSideToken> = s.object<ClientSideToken>({
  id: s.string(),
  token: s.string(),
  name: s.string(),
  description: description3Schema,
  status: s.defaulted(clientTokenStatusSchema, ClientTokenStatus.Active),
  revokedAt: revokedAtSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    revokedAt: "revoked_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
