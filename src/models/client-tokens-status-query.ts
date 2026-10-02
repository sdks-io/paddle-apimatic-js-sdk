import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClientTokensStatusQuery = {
  Active: "active",
  Revoked: "revoked",
} as const;
export type ClientTokensStatusQuery =
  | (typeof ClientTokensStatusQuery)[keyof typeof ClientTokensStatusQuery]
  | (string & {});

export const clientTokensStatusQuerySchema: EnumSchema<ClientTokensStatusQuery> =
  s.enumOf<ClientTokensStatusQuery>(ClientTokensStatusQuery);
