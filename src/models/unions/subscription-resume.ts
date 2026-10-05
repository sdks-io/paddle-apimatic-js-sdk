import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { resumeImmediatelySchema, type ResumeImmediately } from "../resume-immediately.js";
import { resumeOnASpecificDateSchema, type ResumeOnASpecificDate } from "../resume-on-aspecific-date.js";

export type SubscriptionResume = ResumeOnASpecificDate | ResumeImmediately | Record<string, unknown>;

export const subscriptionResumeSchema: Schema<SubscriptionResume> = s.of<SubscriptionResume>(
  s.union([
    s.lazy(() => resumeOnASpecificDateSchema),
    s.lazy(() => resumeImmediatelySchema),
    s.record(s.string(), s.unknown()),
  ]),
);
