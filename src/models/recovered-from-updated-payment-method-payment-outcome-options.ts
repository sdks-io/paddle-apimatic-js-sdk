import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcomeSchema,
  type SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome,
} from "./simulation-config-options-payment-recovered-updated-payment-outcome.js";

/** Options for when the payment is recovered from an updated payment method. */
export type RecoveredFromUpdatedPaymentMethodPaymentOutcomeOptions = {
  /**
   * Determines which webhooks are sent based on the outcome of the payment. If omitted, defaults to
   * `success`.
   */
  paymentOutcome?: SimulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcome;
  /**
   * Determines which webhooks are sent based on what happens to the subscription when payment
   * recovery attempts are exhausted. Only applies when `payment_outcome` is `failed`. If omitted,
   * defaults to `null`.
   */
  dunningExhaustedAction?: string | null;
};

export const recoveredFromUpdatedPaymentMethodPaymentOutcomeOptionsSchema: Schema<RecoveredFromUpdatedPaymentMethodPaymentOutcomeOptions> =
  s.object<RecoveredFromUpdatedPaymentMethodPaymentOutcomeOptions>({
    paymentOutcome: s.optional(
      s.lazy(() => simulationConfigOptionsPaymentRecoveredUpdatedPaymentOutcomeSchema),
    ),
    dunningExhaustedAction: s.optionalNullable(s.string()),
    _keysMap: {
      paymentOutcome: "payment_outcome",
      dunningExhaustedAction: "dunning_exhausted_action",
    },
  });
