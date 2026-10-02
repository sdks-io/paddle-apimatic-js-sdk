import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Unique code that customers can use to redeem this discount at checkout. Use letters and numbers
 * only, up to 32 characters. Not case-sensitive.
 *
 * If omitted and `enabled_for_checkout` is `true`, Paddle generates a random 10-character code.
 */
export type Code = string;

export const codeSchema: Schema<Code> = s.of<Code>(s.union([s.string()]));
