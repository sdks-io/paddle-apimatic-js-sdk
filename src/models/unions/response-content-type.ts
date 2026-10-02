import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Content-Type sent by the responding server. */
export type ResponseContentType = string;

export const responseContentTypeSchema: Schema<ResponseContentType> = s.of<ResponseContentType>(
  s.union([s.string()]),
);
