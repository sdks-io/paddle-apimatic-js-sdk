import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of this client-side token. */
export const ClientTokenStatus = {
  /**
   * "active": { "description": "Client-side token is active. The token can be used to authenticate
   * Paddle.js." }
   */
  Active: "active",
  /**
   * "revoked": { "description": "Client-side token is revoked. The token can't be used to
   * authenticate Paddle.js." }
   */
  Revoked: "revoked",
} as const;
export type ClientTokenStatus = (typeof ClientTokenStatus)[keyof typeof ClientTokenStatus] | (string & {});

export const clientTokenStatusSchema: EnumSchema<ClientTokenStatus> =
  s.enumOf<ClientTokenStatus>(ClientTokenStatus);
