import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of a business. Adds business details to webhook payloads. Requires `customer_id`. */
export type BusinessId3 = string;

export const businessId3Schema: Schema<BusinessId3> = s.of<BusinessId3>(s.union([s.string()]));
