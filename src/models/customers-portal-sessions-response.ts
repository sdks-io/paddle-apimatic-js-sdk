import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerPortalSessionSchema, type CustomerPortalSession } from "./customer-portal-session.js";
import { metaSchema, type Meta } from "./meta.js";

export type CustomersPortalSessionsResponse = {
  /** Represents a customer portal session. */
  data: CustomerPortalSession;
  /** Information about this response. */
  meta: Meta;
};

export const customersPortalSessionsResponseSchema: Schema<CustomersPortalSessionsResponse> =
  s.object<CustomersPortalSessionsResponse>({
    data: customerPortalSessionSchema,
    meta: metaSchema,
  });
