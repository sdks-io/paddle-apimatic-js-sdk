import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Paddle ID of the address that this transaction is for, prefixed with `add_`. Requires
 * `customer_id`. If omitted, transaction status is `draft`.
 */
export type AddressId9 = string;

export const addressId9Schema: Schema<AddressId9> = s.of<AddressId9>(s.union([s.string()]));
