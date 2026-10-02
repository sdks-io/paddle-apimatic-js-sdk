import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BusinessId17 = string;

export const businessId17Schema: Schema<BusinessId17> = s.of<BusinessId17>(s.union([s.string()]));
