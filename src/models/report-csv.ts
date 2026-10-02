import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportCsv = {
  /** URL of the requested resource. */
  url: string;
};

export const reportCsvSchema: Schema<ReportCsv> = s.object<ReportCsv>({
  url: s.string(),
});
