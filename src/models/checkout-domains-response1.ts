import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutDomainSchema, type CheckoutDomain } from "./checkout-domain.js";
import { metaSchema, type Meta } from "./meta.js";

export type CheckoutDomainsResponse1 = {
  /** Represents a checkout domain entity. */
  data: CheckoutDomain;
  /** Information about this response. */
  meta: Meta;
};

export const checkoutDomainsResponse1Schema: Schema<CheckoutDomainsResponse1> =
  s.object<CheckoutDomainsResponse1>({
    data: checkoutDomainSchema,
    meta: metaSchema,
  });
