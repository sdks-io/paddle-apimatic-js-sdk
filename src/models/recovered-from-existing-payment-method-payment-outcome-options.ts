import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simulationConfigOptionsPaymentRecoveredExistingPaymentOutcomeSchema,
  type SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome,
} from "./simulation-config-options-payment-recovered-existing-payment-outcome.js";

/** Options for when the payment is recovered from an existing payment method. */
export type RecoveredFromExistingPaymentMethodPaymentOutcomeOptions = {
  /**
   * Determines which webhooks are sent based on the outcome of the payment. If omitted, defaults to
   * `success`.
   */
  paymentOutcome?: SimulationConfigOptionsPaymentRecoveredExistingPaymentOutcome;
  /**
   * Determines which webhooks are sent based on what happens to the subscription when payment
   * recovery attempts are exhausted. Only applies when `payment_outcome` is `failed`. If omitted,
   * defaults to `null`.
   */
  dunningExhaustedAction?: string | null;
};

export const recoveredFromExistingPaymentMethodPaymentOutcomeOptionsSchema: Schema<RecoveredFromExistingPaymentMethodPaymentOutcomeOptions> =
  s.object<RecoveredFromExistingPaymentMethodPaymentOutcomeOptions>({
    paymentOutcome: s.optional(
      s.lazy(() => simulationConfigOptionsPaymentRecoveredExistingPaymentOutcomeSchema),
    ),
    dunningExhaustedAction: s.optionalNullable(s.string()),
    _keysMap: {
      paymentOutcome: "payment_outcome",
      dunningExhaustedAction: "dunning_exhausted_action",
    },
  });
