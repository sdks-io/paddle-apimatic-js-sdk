import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** State, county, or region of this address. */
export type Region = string;

export const regionSchema: Schema<Region> = s.of<Region>(s.union([s.string()]));
