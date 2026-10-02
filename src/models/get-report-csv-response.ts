import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { reportCsvSchema, type ReportCsv } from "./report-csv.js";

export type GetReportCsvResponse = {
  /** Information about this response. */
  meta: Meta;
  data: ReportCsv;
};

export const getReportCsvResponseSchema: Schema<GetReportCsvResponse> = s.object<GetReportCsvResponse>({
  meta: metaSchema,
  data: reportCsvSchema,
});
