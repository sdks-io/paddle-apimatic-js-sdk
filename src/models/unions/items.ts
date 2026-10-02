import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { adjustmentItemCreateSchema, type AdjustmentItemCreate } from "../adjustment-item-create.js";

/** List of transaction items to adjust. Required if `type` is not populated or set to `partial`. */
export type Items = AdjustmentItemCreate[];

export const itemsSchema: Schema<Items> = s.of<Items>(
  s.union([s.array(s.lazy(() => adjustmentItemCreateSchema))]),
);
