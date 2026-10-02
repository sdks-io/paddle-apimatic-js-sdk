import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ipAddressSchema, type IpAddress } from "./ip-address.js";
import { metaSchema, type Meta } from "./meta.js";

export type IpAddressResponse = {
  data: IpAddress;
  /** Information about this response. */
  meta: Meta;
};

export const ipAddressResponseSchema: Schema<IpAddressResponse> = s.object<IpAddressResponse>({
  data: ipAddressSchema,
  meta: metaSchema,
});
