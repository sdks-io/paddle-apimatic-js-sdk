import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Keys used for working with paginated results. */
export type Pagination = {
  /**
   * Number of entities per page for this response. May differ from the number requested if the
   * requested number is greater than the maximum.
   */
  perPage: number;
  /**
   * URL containing the query parameters of the original request, along with the `after` parameter
   * that marks the starting point of the next page. Always returned, even if `has_more` is `false`.
   */
  next: string;
  /** Whether this response has another page. */
  hasMore: boolean;
  /**
   * Estimated number of entities for this response.
   *
   * For datasets with 100,000 or fewer matches, returns the exact count. For datasets with more
   * than 100,000 matches, returns `100001` to indicate that more than 100,000 entities match.
   * Returns `-1` when counting is skipped or couldn't be calculated.
   *
   * Use `has_more` and `next` to page through all results rather than relying on `estimated_total`
   * for an exact count.
   */
  estimatedTotal?: number;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>({
  perPage: s.number(),
  next: s.string(),
  hasMore: s.boolean(),
  estimatedTotal: s.optional(s.number()),
  _keysMap: {
    perPage: "per_page",
    hasMore: "has_more",
    estimatedTotal: "estimated_total",
  },
});
