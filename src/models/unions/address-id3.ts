import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of an address. Adds address details to webhook payloads. Requires `customer_id`. */
export type AddressId3 = string;

export const addressId3Schema: Schema<AddressId3> = s.of<AddressId3>(s.union([s.string()]));
