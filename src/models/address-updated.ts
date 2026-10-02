import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

/** Details specific to `subscription_address_updated` actions. */
export type AddressUpdated = {
  /** What happened on the subscription. @default "subscription_address_updated" */
  action?: "subscription_address_updated";
  /** Updated address against the subscription. This is what the address was changed to. */
  address: Address;
};

export const addressUpdatedSchema: Schema<AddressUpdated> = s.object<AddressUpdated>({
  action: s.defaulted(s.literal("subscription_address_updated"), "subscription_address_updated"),
  address: addressSchema,
});
