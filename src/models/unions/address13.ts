import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressPreviewSchema, type AddressPreview } from "../address-preview.js";

/**
 * Address for this transaction preview. Send one of `address_id`, `customer_ip_address`, or the
 * `address` object when previewing.
 */
export type Address13 = AddressPreview;

export const address13Schema: Schema<Address13> = s.of<Address13>(
  s.union([s.lazy(() => addressPreviewSchema)]),
);
