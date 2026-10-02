import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  simulationSubscriptionCancellationConfigSchema,
  type SimulationSubscriptionCancellationConfig,
} from "../simulation-subscription-cancellation-config.js";

export type SubscriptionCancellation = SimulationSubscriptionCancellationConfig;

export const subscriptionCancellationSchema: Schema<SubscriptionCancellation> =
  s.of<SubscriptionCancellation>(s.union([s.lazy(() => simulationSubscriptionCancellationConfigSchema)]));
