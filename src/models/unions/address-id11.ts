import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the address that this transaction preview is for, prefixed with `add_`. Send one of
 * `address_id`, `customer_ip_address`, or the `address` object when previewing.
 */
export type AddressId11 = string;

export const addressId11Schema: Schema<AddressId11> = s.of<AddressId11>(s.union([s.string()]));
