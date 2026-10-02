import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the address that this preview is for, prefixed with `add_`. Send one of
 * `address_id`, `customer_ip_address`, or the `address` object when previewing.
 */
export type AddressId1 = string;

export const addressId1Schema: Schema<AddressId1> = s.of<AddressId1>(s.union([s.string()]));
