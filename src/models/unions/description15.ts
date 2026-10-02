import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Short description of this API key. Typically gives details about what the API key is used for and
 * where it's used.
 */
export type Description15 = string;

export const description15Schema: Schema<Description15> = s.of<Description15>(s.union([s.string()]));
