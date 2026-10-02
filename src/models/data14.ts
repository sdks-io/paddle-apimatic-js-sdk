import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientTokenStatusSchema, type ClientTokenStatus } from "./client-token-status.js";
import { description3Schema, type Description3 } from "./unions/description3.js";
import { revokedAtSchema, type RevokedAt } from "./unions/revoked-at.js";

/** New or changed entity. */
export type Data14 = {
  /** Unique Paddle ID for this client-side token entity, prefixed with `ctkn_`. */
  id: string;
  /**
   * A client-side token, prefixed with `test` or `live` depending on the environment of your
   * account. Pass as the `token` parameter when initializing Paddle.js to authenticate.
   */
  token: string;
  /** Short name of this client-side token. Typically unique and human-identifiable. */
  name: string;
  description: Description3;
  /** Status of this client-side token. */
  status: ClientTokenStatus;
  /** RFC 3339 datetime string of when this entity was created. Set automatically by Paddle. */
  createdAt: Date;
  /** RFC 3339 datetime string of when this entity was updated. Set automatically by Paddle. */
  updatedAt: Date;
  /** RFC 3339 datetime string of when this client-side token was revoked. `null` if not revoked. */
  revokedAt: RevokedAt;
};

export const data14Schema: Schema<Data14> = s.object<Data14>({
  id: s.string(),
  token: s.string(),
  name: s.string(),
  description: description3Schema,
  status: clientTokenStatusSchema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  revokedAt: revokedAtSchema,
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    revokedAt: "revoked_at",
  },
});
