import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerAuthenticationTokenSchema,
  type CustomerAuthenticationToken,
} from "./customer-authentication-token.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersAuthTokenResponse = {
  /** Represents a customer authentication token. */
  data: CustomerAuthenticationToken;
  /** Information about this response. */
  meta: Meta;
};

export const customersAuthTokenResponseSchema: Schema<CustomersAuthTokenResponse> =
  s.object<CustomersAuthTokenResponse>({
    data: customerAuthenticationTokenSchema,
    meta: metaSchema,
  });
