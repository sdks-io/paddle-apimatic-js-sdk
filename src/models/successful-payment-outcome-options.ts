import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  SimulationConfigOptionsPaymentSuccessPaymentOutcome,
  simulationConfigOptionsPaymentSuccessPaymentOutcomeSchema,
} from "./simulation-config-options-payment-success-payment-outcome.js";

/** Options for when the payment outcome is successful. */
export type SuccessfulPaymentOutcomeOptions = {
  /**
   * Determines which webhooks are sent based on the outcome of the payment. If omitted, defaults to
   * `success`.
   *
   * @default SimulationConfigOptionsPaymentSuccessPaymentOutcome.Success
   */
  paymentOutcome?: SimulationConfigOptionsPaymentSuccessPaymentOutcome;
  /**
   * Determines which webhooks are sent based on what happens to the subscription when payment
   * recovery attempts are exhausted. Only applies when `payment_outcome` is `failed`. If omitted,
   * defaults to `null`.
   */
  dunningExhaustedAction?: string | null;
};

export const successfulPaymentOutcomeOptionsSchema: Schema<SuccessfulPaymentOutcomeOptions> =
  s.object<SuccessfulPaymentOutcomeOptions>({
    paymentOutcome: s.defaulted(
      simulationConfigOptionsPaymentSuccessPaymentOutcomeSchema,
      SimulationConfigOptionsPaymentSuccessPaymentOutcome.Success,
    ),
    dunningExhaustedAction: s.optionalNullable(s.string()),
    _keysMap: {
      paymentOutcome: "payment_outcome",
      dunningExhaustedAction: "dunning_exhausted_action",
    },
  });
