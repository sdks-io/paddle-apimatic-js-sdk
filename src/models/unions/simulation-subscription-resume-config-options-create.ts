import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  failedPaymentOutcomeOptionsSchema,
  type FailedPaymentOutcomeOptions,
} from "../failed-payment-outcome-options.js";
import {
  recoveredFromExistingPaymentMethodPaymentOutcomeOptionsSchema,
  type RecoveredFromExistingPaymentMethodPaymentOutcomeOptions,
} from "../recovered-from-existing-payment-method-payment-outcome-options.js";
import {
  recoveredFromUpdatedPaymentMethodPaymentOutcomeOptionsSchema,
  type RecoveredFromUpdatedPaymentMethodPaymentOutcomeOptions,
} from "../recovered-from-updated-payment-method-payment-outcome-options.js";
import {
  successfulPaymentOutcomeOptionsSchema,
  type SuccessfulPaymentOutcomeOptions,
} from "../successful-payment-outcome-options.js";

/** Options that determine which webhooks are sent as part of a simulation. */
export type SimulationSubscriptionResumeConfigOptionsCreate =
  | SuccessfulPaymentOutcomeOptions
  | FailedPaymentOutcomeOptions
  | RecoveredFromExistingPaymentMethodPaymentOutcomeOptions
  | RecoveredFromUpdatedPaymentMethodPaymentOutcomeOptions;

export const simulationSubscriptionResumeConfigOptionsCreateSchema: Schema<SimulationSubscriptionResumeConfigOptionsCreate> =
  s.of<SimulationSubscriptionResumeConfigOptionsCreate>(
    s.union([
      s.lazy(() => successfulPaymentOutcomeOptionsSchema),
      s.lazy(() => failedPaymentOutcomeOptionsSchema),
      s.lazy(() => recoveredFromExistingPaymentMethodPaymentOutcomeOptionsSchema),
      s.lazy(() => recoveredFromUpdatedPaymentMethodPaymentOutcomeOptionsSchema),
    ]),
  );
