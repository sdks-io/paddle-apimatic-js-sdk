import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionPreviewUpdateSummarySchema,
  type SubscriptionPreviewUpdateSummary,
} from "../subscription-preview-update-summary.js";

export type UpdateSummary = SubscriptionPreviewUpdateSummary;

export const updateSummarySchema: Schema<UpdateSummary> = s.of<UpdateSummary>(
  s.union([s.lazy(() => subscriptionPreviewUpdateSummarySchema)]),
);
