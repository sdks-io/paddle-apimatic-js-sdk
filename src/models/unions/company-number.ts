import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Company number for this business. */
export type CompanyNumber = string;

export const companyNumberSchema: Schema<CompanyNumber> = s.of<CompanyNumber>(s.union([s.string()]));
