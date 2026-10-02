import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of a customer. Adds customer details to webhook payloads. */
export type CustomerId3 = string;

export const customerId3Schema: Schema<CustomerId3> = s.of<CustomerId3>(s.union([s.string()]));
