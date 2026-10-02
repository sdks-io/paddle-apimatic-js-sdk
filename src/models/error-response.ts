import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { metaSchema, type Meta } from "./meta.js";

/**
 * An error occurred. Check the `type`, `code`, and `detail` in the returned error object for more
 * information.
 *
 * Validation errors include an array of `errors` with information about which fields failed
 * validation.
 */
export type ErrorResponse = {
  /** Represents an error. */
  error: Error;
  /** Information about this response. */
  meta: Meta;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: errorSchema,
  meta: metaSchema,
});
