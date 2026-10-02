import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { resumeImmediatelySchema, type ResumeImmediately } from "../resume-immediately.js";
import { resumeOnASpecificDateSchema, type ResumeOnASpecificDate } from "../resume-on-aspecific-date.js";

export type SubscriptionResume1 = ResumeOnASpecificDate | ResumeImmediately | Record<string, unknown>;

export const subscriptionResume1Schema: Schema<SubscriptionResume1> = s.of<SubscriptionResume1>(
  s.union([
    s.lazy(() => resumeOnASpecificDateSchema),
    s.lazy(() => resumeImmediatelySchema),
    s.record(s.string(), s.unknown()),
  ]),
);
