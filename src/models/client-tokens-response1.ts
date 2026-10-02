import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSideTokenSchema, type ClientSideToken } from "./client-side-token.js";
import { metaSchema, type Meta } from "./meta.js";

export type ClientTokensResponse1 = {
  /** Represents a client-side token entity. */
  data: ClientSideToken;
  /** Information about this response. */
  meta: Meta;
};

export const clientTokensResponse1Schema: Schema<ClientTokensResponse1> = s.object<ClientTokensResponse1>({
  data: clientSideTokenSchema,
  meta: metaSchema,
});
