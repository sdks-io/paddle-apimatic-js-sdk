import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * IP address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the
 * `address` object when previewing.
 */
export type CustomerIpAddress = string;

export const customerIpAddressSchema: Schema<CustomerIpAddress> = s.of<CustomerIpAddress>(
  s.union([s.string()]),
);
