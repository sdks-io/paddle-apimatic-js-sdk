import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First line of this address. */
export type FirstLine = string;

export const firstLineSchema: Schema<FirstLine> = s.of<FirstLine>(s.union([s.string()]));
