import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Paddle ID of the address that this transaction is for, prefixed with `add_`. */
export type AddressId = string;

export const addressIdSchema: Schema<AddressId> = s.of<AddressId>(s.union([s.string()]));
