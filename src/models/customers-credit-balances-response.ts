import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBalanceSchema, type CreditBalance } from "./credit-balance.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersCreditBalancesResponse = {
  data: CreditBalance[];
  /** Information about this response. */
  meta: Meta;
};

export const customersCreditBalancesResponseSchema: Schema<CustomersCreditBalancesResponse> =
  s.object<CustomersCreditBalancesResponse>({
    data: s.array(s.lazy(() => creditBalanceSchema)),
    meta: metaSchema,
  });
