import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Updated custom data on the subscription. `null` if custom data was removed. This is what the
 * custom data was changed to.
 */
export type CustomData27 = Record<string, unknown>;

export const customData27Schema: Schema<CustomData27> = s.of<CustomData27>(
  s.union([s.record(s.string(), s.unknown())]),
);
