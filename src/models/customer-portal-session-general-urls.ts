import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Authenticated customer portal deep links that aren't associated with a specific entity. */
export type CustomerPortalSessionGeneralUrls = {
  /** Link to the overview page in the customer portal. */
  overview: string;
};

export const customerPortalSessionGeneralUrlsSchema: Schema<CustomerPortalSessionGeneralUrls> =
  s.object<CustomerPortalSessionGeneralUrls>({
    overview: s.string(),
  });
