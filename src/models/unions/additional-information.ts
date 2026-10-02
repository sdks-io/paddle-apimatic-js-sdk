import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Notes or other information to include on this invoice. Appears on invoice documents. */
export type AdditionalInformation = string;

export const additionalInformationSchema: Schema<AdditionalInformation> = s.of<AdditionalInformation>(
  s.union([s.string()]),
);
