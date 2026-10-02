import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  SimulationConfigOptionsPaymentFailedDunningExhaustedAction,
  simulationConfigOptionsPaymentFailedDunningExhaustedActionSchema,
} from "./simulation-config-options-payment-failed-dunning-exhausted-action.js";
import {
  simulationConfigOptionsPaymentFailedPaymentOutcomeSchema,
  type SimulationConfigOptionsPaymentFailedPaymentOutcome,
} from "./simulation-config-options-payment-failed-payment-outcome.js";

/** Options for when the payment outcome is failed. */
export type FailedPaymentOutcomeOptions = {
  /**
   * Determines which webhooks are sent based on the outcome of the payment. If omitted, defaults to
   * `success`.
   */
  paymentOutcome?: SimulationConfigOptionsPaymentFailedPaymentOutcome;
  /**
   * Determines which webhooks are sent based on what happens to the subscription when payment
   * recovery attempts are exhausted. If omitted, defaults to `subscription_canceled`.
   *
   * @default SimulationConfigOptionsPaymentFailedDunningExhaustedAction.SubscriptionCanceled
   */
  dunningExhaustedAction?: SimulationConfigOptionsPaymentFailedDunningExhaustedAction;
};

export const failedPaymentOutcomeOptionsSchema: Schema<FailedPaymentOutcomeOptions> =
  s.object<FailedPaymentOutcomeOptions>({
    paymentOutcome: s.optional(s.lazy(() => simulationConfigOptionsPaymentFailedPaymentOutcomeSchema)),
    dunningExhaustedAction: s.defaulted(
      simulationConfigOptionsPaymentFailedDunningExhaustedActionSchema,
      SimulationConfigOptionsPaymentFailedDunningExhaustedAction.SubscriptionCanceled,
    ),
    _keysMap: {
      paymentOutcome: "payment_outcome",
      dunningExhaustedAction: "dunning_exhausted_action",
    },
  });
