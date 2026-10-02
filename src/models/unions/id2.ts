import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Unique Paddle ID for this price, prefixed with `pri_`. The value is null for custom prices being
 * previewed.
 */
export type Id2 = string;

export const id2Schema: Schema<Id2> = s.of<Id2>(s.union([s.string()]));
