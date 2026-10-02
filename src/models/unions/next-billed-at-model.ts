import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NextBilledAtModel = string[];

export const nextBilledAtModelSchema: Schema<NextBilledAtModel> = s.of<NextBilledAtModel>(
  s.union([s.array(s.string())]),
);
