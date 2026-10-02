import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Represents an error. */
export const ErrorResponseType = {
  /**
   * "request_error": { "description": "Typically means there's a problem with the request that you
   * made." }
   */
  RequestError: "request_error",
  /** "api_error": { "description": "Typically means there's a problem with the Paddle API." } */
  ApiError: "api_error",
} as const;
export type ErrorResponseType = (typeof ErrorResponseType)[keyof typeof ErrorResponseType] | (string & {});

export const errorResponseTypeSchema: EnumSchema<ErrorResponseType> =
  s.enumOf<ErrorResponseType>(ErrorResponseType);
