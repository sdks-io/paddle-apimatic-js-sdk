import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IpAddress = {
  /** List of Paddle IPv4 CIDRs. */
  ipv4Cidrs: string[];
};

export const ipAddressSchema: Schema<IpAddress> = s.object<IpAddress>({
  ipv4Cidrs: s.array(s.string()),
  _keysMap: {
    ipv4Cidrs: "ipv4_cidrs",
  },
});
