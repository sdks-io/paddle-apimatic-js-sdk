import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { businessSchema, type Business } from "../business.js";

/** Business for the subscription when it was created. */
export type Business1 = Business;

export const business1Schema: Schema<Business1> = s.of<Business1>(s.union([s.lazy(() => businessSchema)]));
