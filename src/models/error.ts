import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { errorResponseTypeSchema, type ErrorResponseType } from "./error-response-type.js";

/** Represents an error. */
export type Error = {
  /** Type of error encountered. */
  type: ErrorResponseType;
  /** Short snake case string that describes this error. Use to search the error reference. */
  code: string;
  /** Some information about what went wrong as a human-readable string. */
  detail: string;
  /** Link to a page in the error reference for this specific error. */
  documentationUrl: string;
  /** List of validation errors. Only returned when there's a validation error. */
  errors?: ErrorItem[];
};

export const errorSchema: Schema<Error> = s.object<Error>({
  type: errorResponseTypeSchema,
  code: s.string(),
  detail: s.string(),
  documentationUrl: s.string(),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  _keysMap: {
    documentationUrl: "documentation_url",
  },
});
