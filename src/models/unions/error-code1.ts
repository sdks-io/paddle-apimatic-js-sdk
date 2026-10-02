import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "../error-code.js";

/** Reason why a payment attempt failed. Returns `null` if payment captured successfully. */
export type ErrorCode1 = ErrorCode;

export const errorCode1Schema: Schema<ErrorCode1> = s.of<ErrorCode1>(
  s.union([s.lazy(() => errorCodeSchema)]),
);
