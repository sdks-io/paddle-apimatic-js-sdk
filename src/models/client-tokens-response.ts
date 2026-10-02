import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSideTokenSchema, type ClientSideToken } from "./client-side-token.js";
import { paginatedMetaSchema, type PaginatedMeta } from "./paginated-meta.js";

export type ClientTokensResponse = {
  data: ClientSideToken[];
  /** Information about this response. */
  meta: PaginatedMeta;
};

export const clientTokensResponseSchema: Schema<ClientTokensResponse> = s.object<ClientTokensResponse>({
  data: s.array(s.lazy(() => clientSideTokenSchema)),
  meta: paginatedMetaSchema,
});
