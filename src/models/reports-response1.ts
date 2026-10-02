import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { reportSchema, type Report } from "./unions/report.js";

export type ReportsResponse1 = {
  /** Represents a report entity. */
  data: Report;
  /** Information about this response. */
  meta: Meta;
};

export const reportsResponse1Schema: Schema<ReportsResponse1> = s.object<ReportsResponse1>({
  data: reportSchema,
  meta: metaSchema,
});
