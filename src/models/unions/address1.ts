import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressPreviewSchema, type AddressPreview } from "../address-preview.js";

/**
 * Address for this preview. Send one of `address_id`, `customer_ip_address`, or the `address`
 * object when previewing.
 */
export type Address1 = AddressPreview;

export const address1Schema: Schema<Address1> = s.of<Address1>(s.union([s.lazy(() => addressPreviewSchema)]));
