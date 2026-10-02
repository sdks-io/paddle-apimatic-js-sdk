import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Information about this response. */
export type PaginatedMeta = {
  /**
   * Unique ID for the request relating to this response. Provide this when contacting Paddle
   * support about a specific request.
   */
  requestId: string;
  /** Keys used for working with paginated results. */
  pagination: Pagination;
};

export const paginatedMetaSchema: Schema<PaginatedMeta> = s.object<PaginatedMeta>({
  requestId: s.string(),
  pagination: paginationSchema,
  _keysMap: {
    requestId: "request_id",
  },
});
