import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of records in this report. `null` if the report is `pending`. */
export type Rows = number;

export const rowsSchema: Schema<Rows> = s.of<Rows>(s.union([s.number()]));
