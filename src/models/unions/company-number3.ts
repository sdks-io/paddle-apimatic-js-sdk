import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Company number for this business. */
export type CompanyNumber3 = string;

export const companyNumber3Schema: Schema<CompanyNumber3> = s.of<CompanyNumber3>(s.union([s.string()]));
