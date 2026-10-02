import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorItem = {
  /** Field where validation error occurred. */
  field: string;
  /** Information about how the field failed validation. */
  message: string;
};

export const errorItemSchema: Schema<ErrorItem> = s.object<ErrorItem>({
  field: s.string(),
  message: s.string(),
});
